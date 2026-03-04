function gerarTicket(){
    const nomeRaw = document.getElementById("input-nome").value;
    const nomeLimpo = nomeRaw.toUpperCase().trim().split(" ");

    if (nomeRaw.length < 3) {
        alert("Erro: quantidade de caracteres inválida!");
        return;
    }

    const dataAtual = new Date();
    const dataPrazo = new Date();
    const nomeTicket = nomeLimpo[0]+" "+nomeLimpo[nomeLimpo.length - 1];

    const urgencia = document.getElementById("urgencia").value;

    if (urgencia == "") {
        alert("Selecione um nível de urgência.");
        return;
    }

    if (urgencia == "alta") {
        dataPrazo.setDate(dataAtual.getDate() + 2);
    } else if (urgencia == "media") {
        dataPrazo.setDate(dataAtual.getDate() + 7);
    } else if (urgencia == "baixa") {
        dataPrazo.setDate(dataAtual.getDate() + 10);
    }

    document.getElementById("out-nome").innerText = nomeTicket;
    document.getElementById("out-data").innerText = dataAtual.toLocaleDateString('pt-BR');
    document.getElementById("out-prazo").innerText = dataPrazo.toLocaleDateString('pt-BR');

    document.getElementById("ticket-resultado").style.display = "block";

}