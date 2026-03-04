function gerarTicket(){
    // Declarando constantes que coletam o nome digitado, depois removem todos os espaços e separam em arrays
    const nomeRaw = document.getElementById("input-nome").value;
    const nomeLimpo = nomeRaw.toUpperCase().trim().split(" ");

    // Comparando se a quantidade de letras não é suficiente e emitindo um alerta
    if (nomeRaw.length < 3) {
        alert("Erro: quantidade de caracteres inválida!");
        return;
    }

    // Instanciando a classe Date na variável dataAtua se  tornando o objeto dataAtual
    const dataAtual = new Date();
    const dataPrazo = new Date();

    // Declarando variável nomeTicket que agrupa apenas o primeiro nome e o último nome
    const nomeTicket = nomeLimpo[0]+" "+nomeLimpo[nomeLimpo.length - 1];

    // Variável que coleta a opção de urgência selecionado
    const urgencia = document.getElementById("urgencia").value;

    // Verificando se o valor "" da opção Selecione uma urgência está selecionado
    if (urgencia == "") {
        alert("Selecione um nível de urgência.");
        return;
    }

    // Verificando qual urgência está selecionada
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