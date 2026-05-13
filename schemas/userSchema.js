import {z} from "zod"

export const schemaLogin = z.object({
    email: z.string().trim().min(5, "Ter no minimo 5 caracteres").email("email invalido"),
    password: z.string().min(8, "Tem que ter no minimo 8 caracteres")
                            .regex(/[A-Z]/, "Tem que ter no minimo um caractere maiusculo")
                            .regex(/[a-z]/, "Tem que ter no minimo um caractere minusculo")
                            .regex(/[0-9]/, "Tem que ter um numero")
})

export const schemaRegister = z.object({
    name: z.string("Nome inválido"),
    age: z.string(),
    email: z.string().trim().min(5, "Ter no minimo 5 caracteres").email("email invalido"),
    password: z.string().min(8, "Tem que ter no minimo 8 caracteres")
                            .regex(/[A-Z]/, "Tem que ter no minimo um caracteres maiusculo")
                            .regex(/[a-z]/, "Tem que ter no minimo um caracteres minusculo")
                            .regex(/[0-9]/, "Tem que ter um numero")
})