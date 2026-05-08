import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const prisma = new PrismaClient()

export async function register(req,res){
    const {name,age,email,password} = req.body
    
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

export async function login(req,res){
    const {email,password} = req.body

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
