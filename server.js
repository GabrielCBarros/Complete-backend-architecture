import dotenv from "dotenv"
dotenv.config()

import express from "express"
import atendimentoRoutes from "./routes/atendimentoRoutes.js"
import authRouter from "./middlewares/authRouter.js"

const port = 3000
const app = express()

app.use(express.json())
app.use(atendimentoRoutes)
app.use(authRouter)
 
app.listen(port, (error) =>{
    if(error){
        return "Deu erro aqui nesse endereço ou porta"
    }
    console.log("Subiu")
    
})

//mongodb, acesso:
//usuário: Gabriel
//Senha: AhxI0yiBioW8zxEL

