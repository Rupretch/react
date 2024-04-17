const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

app.get('/tshirt', (req,res) => {
    res.status(200).send({
        tshirt: 'noir',
        size: 'large'
    })
});

app.get('/get', (req,res) => {
    res.status(200).send({
        ceci: 'est un get',
        retour: 'sa peux retourne beacoup'
    })
});

let messages = [];

app.get('/message', (req,res) =>{
    res.status(200).send({
        message: messages
    })
})


app.post('/messages', (req, res) => {

    const {text, author} = req.body;

    messages.push({text, author});

    res.status(201).json({ message: `message recu avec succes`})
});

app.listen(
    PORT,
    () => console.log(`Hello world on http://localhost:${PORT}`)
);
