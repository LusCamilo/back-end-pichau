const { pecas } = require("../model/DAO/pecas.js")

function GetPiecesById(id) {

    const items = pecas.pecasComputador

    try {
        if (id) {
            let item
            for (let index = 0; index < items.length; index++) {
                const element = items[index];
                if (element.id == id) {
                    item = element
                }
            }
            if (item) {
                return {
                    status: 200,
                    body: item
                }
            }else{
                return {
                    status: 404,
                    body: "Peça não encontrada"
                }
            }
        } else {
            return{
                status: 400,
                body: "Deu ruim"
            }
        }
    } catch (error) {
        console.log(error)
    }

}

module.exports = {
    GetPiecesById
}