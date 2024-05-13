async function processNewMessages(sendResponse) {
    try {
        let ativo = await isLoggedActive();
        let chaveAcesso = await getChaveAcesso();
        let arquivar = await getArquivar();
        showLog('ProcessNewMessages');
        if (ativo) {
            var url = urlBase + "msg/MensagensPendentes";

            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + chaveAcesso
                }
            })
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error('Network response was not ok');
                })
                .then(lista => {

                    const response = {
                        status: 'sucesso',
                        arquivar: arquivar,
                        data: lista
                    };

                    sendResponse(response);

                    for (let i = 0; i < lista.length; i++) {
                        showLog('Retorno do MensagensPedentes');
                        showLog(lista[i]);

                        if (sessionMemory[lista[i].id] == null) {
                            //clientMessage(lista[i]);
                            console.log('Enviado: ', response.data);
                            sessionMemory[lista[i].id] = true;
                            break;
                        }
                    }
                    if (lista.length > 0) {
                        requestServerPost(lista, 'msg/RegistrarEnvio');
                    }
                })
                .catch(error => {
                    console.error('There has been a problem with your fetch operation:', error);
                });
        }
    } catch (e) {
        console.error(e);
    }
}