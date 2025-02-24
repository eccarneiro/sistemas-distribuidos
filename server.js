import express from "express"

const app = express()

const port = 3000;

app.use(express.json());

app.post('/login', (req, res) => {
    const {email, senha} = req.body;

    if(!email || !senha) {
        return res.status(400).send('Email ou senha não informados');
    }

    res.json({email, senha});
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
})

//pra rodar o servidor, basta clonar o repositorio, rodar um YARN, 
// e YARN START. Depois, basta fazer um POST para http://localhost:3000/login, 
// passando um JSON com email e senha. Se não passar, ele retorna um erro 400.
//  Se passar, ele retorna o JSON com email e senha.