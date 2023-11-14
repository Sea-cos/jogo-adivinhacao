function jogo() {
    var iniciar = confirm("Deseja iniciar o jogo?");
    

    if (iniciar) {
        var user = prompt("Insira seu nome");
        var segredo = parseInt(Math.random() * 1001);
        var tentativas = 0;

        while (true) {
            tentativas++;
            var input = prompt("Tentativa Nº " + tentativas + "\nDigite um numero entre 1 e 1000");

            // Verifica se o usuário pressionou "Cancelar" no prompt
            if (input === null) {
                alert("Jogo cancelado.");
                break; // Sai do loop
            }

            input = parseInt(input);

            if (input == segredo) {
                alert("Parabéns " + user + "!!" + "\nVocê adivinhou o número em " + tentativas + " tentativas");
                resetarJogo();
                break; // Sai do loop após acertar
            } else if (input > segredo) {
                alert("O numero secreto é menor do que " + input + ".");
            } else if (input < segredo) {
                alert("O numero secreto é maior do que " + input + ".");
            }
        }
    }
}

function resetarJogo() {
    tentativas = 0;
}





