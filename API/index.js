const express = require('express');
const app = express();
const PORT = 8080;

//app.use(express.json());

/* Normalement il aurai un Headers
Server: nom
Age: 123
Connection: keep-vivant
*/
app.get('/tshirt', (req,res) => {
    //body 
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

app.get('/messages', (req,res) =>{
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


/*
Code de status
2** = bon
4** = erreur de ta part
5** = erreur de serveur

Node Express 2010
https://expressjs.com
youtube.com/watch?v=SccSCuHhOw0
65 535 numéros de port possibles.

GET
POST
PUT
PATCH
DELETE

 */