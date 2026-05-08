
# Função usando promise e async
# await: Funciona como um promise, tudo que ta ali dentro nao tem nada haver com java script é algo que está no banco de dados, então precisa de uma promise para dizer, java script algo vai chegar aqui
# async: Usando o promise, ela se torna uma função assincrona, então consequentemente tem que usar o async antes da função
# create: Função do post é criar, esse create serve para isso, uma função para criar dados do usuario
# updated: Serve para colocar na parte de atualização, no caso PUT
# findmany(): Lista tudo que ja foi criado, todos os id, com suas devidas iformações

 app.post("/usuarios", async (req,res) => {
   await prisma.user.create({
        data:{
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
        
    })
    res.status(201).json(req.body)
})
