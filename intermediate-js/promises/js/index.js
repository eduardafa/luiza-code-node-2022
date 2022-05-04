function consumeApi() {
    let opts = {
        method: 'GET',
        headers: {},
    };

    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados', opts)
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            document.getElementById('listStates').innerHTML = '';

            for (let index in response) {
                let uf = response[index];

                var paragraph = document.createElement('p');
                var text = document.createTextNode(
                    `${uf.id} - ${uf.sigla} - ${uf.nome}`
                );
                paragraph.appendChild(text);

                document.getElementById('listStates').appendChild(paragraph);
            }
        });
}
