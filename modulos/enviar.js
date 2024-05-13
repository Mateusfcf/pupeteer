function enviar(resultado) {
    if (resultado >= 5.153) {
        var resposta = 'vender'
    } else {
        var resposta = 'comprar'
    }

    return WPP.chat.sendTextMessage('553195491908@c.us', `O preço do dolar está ${resultado}R$ e é um bom momento para ${resposta}`, { creatChat: true, delay: 5000 });
}

module.exports = enviar;