
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()


export async function createUserController(req,res){
    
    const createUser = await prisma.user.create({
        
        data: req.body

    });
    res.status(201).json(createUser)    
}

export async function findyManyUserController(req,res){
    
    const findyManyUser = await prisma.user.findMany()
    
    res.status(200).json(findyManyUser)
}

export async function updatedUserController(req,res){
    const updatedUser = await prisma.user.update({
        where:{
            id: req.params.id
        },

        data: req.body
        
    })

    res.status(200).json(updatedUser)
    
}

export async function deleteUserController(req,res){
     await prisma.user.delete({
        where:{
            id: req.params.id
        },
    })
    res.status(200).json({message: "Foi deletado"})
}


    
    