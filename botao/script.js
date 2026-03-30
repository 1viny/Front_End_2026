 let cliques = 0;

    const botao = document.getElementById("botao");
    const contador = document.getElementById("contador");

    botao.addEventListener("click", function() {
      cliques++;
      contador.innerText = cliques;
    });