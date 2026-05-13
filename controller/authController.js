import { PrismaClient } from "@prisma/client"
import {schemaLogin, schemaRegister} from "../schemas/userSchema.js"

import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const prisma = new PrismaClient()

//Essa funçao cuida de toda parte dos registros dos usuarios

export async function register(req,res){
    const { name, age, email, password } = schemaRegister.parse(req.body)// aqui estou usando o zod para estabelecer condição de como tem que ser
    
    const hashedPassword = await bcrypt.hash(password,10) 

    const user = await prisma.user.create({
        data:{
            name,
            age,
            email,
            password: hashedPassword
        }
    })

    res.status(201).json(user)
}

//Essa função cuida da parte de login, aqui que faz o login e recebe seu token

export async function login(req,res){
    const {email,password} = schemaLogin.parse(req.body)

    const user =  await prisma.user.findUnique({
        where:{
            email,
        }
    })
    if(!user){
        return res.status(404).json({message: "Email não encontrado"})
        
    }

    const passwordMatch = await bcrypt.compare(password,user.password)

    if(!passwordMatch){
        
        
        return res.status(401).json({message:"Senha invalida"})
    }

    const token = jwt.sign(
        { id: user.id },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
        
    )
    res.json(token)

}
