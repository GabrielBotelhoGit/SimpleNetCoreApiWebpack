import "../css/style.css"

function teste() {
    console.log("testeteste");
}

window.onload = () => {    
    $("#btnSubmit").click(() => {
        if (!$("#inputEmail").val()) {
            return false;
        }
        let email = encodeURI($("#inputEmail").val());
        jqueryPostAsPromise("Utilizador/utilizadorByEmail", email)
            .then((res) => {
                let utilizador = res;
                let htmlRetorno = `<label>O utilizador com o email ${utilizador.email} têm os seguintes dados</label>:
                                        <ul>
                                            <li>Numero de Telefone: ${utilizador.telefone}</li>
                                            <li>Numero de Telemóvel: ${utilizador.telemovel}</li>                                            
                                        <ul>
                                `;
                $("#responsta").empty();
                $("#resposta").append(htmlRetorno);
                return jqueryPostAsPromise("Utilizador/nascimentoByTelemovel", utilizador.telemovel)
            })
            .then((res) => {
                let dataNascimento = res;
                $("#dataNascimento").empty();
                $("#dataNascimento").append(`<label>Data de nascimento: ${dataNascimento}</label`);
                return jqueryGetAsPromise("Utilizador")
            })
            .then((res) => {
                let utilizador = res;
                let htmlCorpoModal = `<label>O utilizador com o email ${utilizador.email} têm os seguintes dados:</label>
                                        <ul>
                                            <li>${utilizador.idade} anos de Idade </li>
                                            <li>Numero de Telefone: ${utilizador.telefone}</li>
                                            <li>Numero de Telemóvel: ${utilizador.telemovel}</li>
                                            <li>Data de nascimento: ${utilizador.dataNascimento}</li>                                            
                                        <ul>
                                `;
                $("#modalBodyUtilizador").empty();
                $("#modalBodyUtilizador").append(htmlCorpoModal);
                $("#btnShowModal").click();

            })
            .catch ((err) => {
                alert("Erro na comunicação com a api consulte o console para mais informações:");
                console.log(err);
            })

    })
}

function jqueryGetAsPromise(route) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: route,
            type: "GET",
            contentType: "application/json; charset=utf-8",           
        })             
        .done((res) => {
            resolve(res);
        })
        .fail((err) => {
            reject(err);
        });
    })
}

function jqueryPostAsPromise(route, data) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: route,
            type: "POST",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
        })
        .done((res) => {
            resolve(res);
        })
        .fail((err) => {
            reject(err);
        });
    })
}