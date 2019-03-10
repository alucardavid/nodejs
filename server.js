const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

app.get('/', (req, resp) => {
    resp.send(
        `<html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1> Casa do Código </h1>
            </body
        </html>`
    );
});

app.get('/livros', (req, resp) => {
    resp.send(
        `<html>
            <head>
                <meta charset="utf-8">
            </git pushhead>
            <body>
                <h1> Listagem de Livros </h1>
            </body
        </html>`
    );
});
