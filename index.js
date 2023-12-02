//criar aplicacoes node no formato de API
const express = require('express')

//manipula as permissoes do protocolo http
const cors = require('cors')

//controla o corpo das requisicoes do protocolo http
const bodyParser = require('body-parser')

const { GetPiecesById } = require('./controller/pecas.controller')

const app = express()


app.get("/pecas/:id", async function (request, response) {
    const pecasId = request.params.id
    const GetPiece = GetPiecesById(pecasId)

    if (GetPiece) {
        response.status(GetPiece.status)
        response.json(GetPiece.body)
    }else{
        response.status(GetPiece.status)
        response.json(GetPiece.body)
    }
})

app.listen(3333, function () {
    console.log('Servidor aguardando requisiçoes.')
})