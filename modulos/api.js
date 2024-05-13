function api() {
    return new Promise((resolve, reject) => {
        fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL')
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Erro ao obter os dados');
                }
                return res.json();
            })
            .then(data => {
                resolve(data.USDBRL.bid);
            })
            .catch(error => {
                reject(error);
            });
    });
}

module.exports = api;