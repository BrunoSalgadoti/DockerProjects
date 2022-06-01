const express = require('express')  // <--- chamando o framework instaladocls
const app = express()              // <--- inicializando o framework instalado
const port = 3000                  // <--- porta da aplicaçao


app.get('/', (req, res) => {
    res.send('Olá minha Imagem Modificada!!!! BRN')
})

app.listen(port, () => {
    console.log('Executando na Porta: ' + port)
});