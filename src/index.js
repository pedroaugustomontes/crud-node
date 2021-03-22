const { request, response } = require('express');
const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(express.json());

// Banco de dados
const costumers = [];

// cpf - string
// name - string
// id - uuid
// statement - [array]
app.post("/account", (request, response) => {
    const { cpf, name } = request.body;
    const id = uuidv4();

    // push insere dados dentro de um array
    costumers.push({
        cpf,
        name,
        id,
        statement: []
    });

    return response.status(201).send();
});

app.listen(3333);