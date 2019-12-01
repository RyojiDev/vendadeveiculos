let mensagemTitle = document.getElementById("mensagem_title");
let mensagemBody = document.getElementById("mensagem_body");
let comprar = document.getElementById("comprar_veiculo");
let valorVeiculo = 0;

let fordkaImg = document.getElementById('fordka');
let golImg = document.getElementById('gol');
let gettaImg = document.getElementById('getta');

let clicado = false;

let mensagem = "Seja bem vindo, qual veiculo , você gostaria de Escolher ? ";


class Veiculo {
    constructor(nome, valor) {
        this.nome = nome;
        this.valor = valor;
    }

    veiculo(selecionado) {

        if (selecionado == 'Fordka') {
            mensagemModal("o carro selecionado foi " + selecionado, "custa " + this.valor + " você gostaria de comprar ?");
            fordkaImg.classList.add("img-selecionada");

        } else if (selecionado == 'Gol') {

            mensagemModal("o carro selecionado foi " + selecionado, "custa " + this.valor + " você gostaria de comprar ?");
            golImg.classList.add("img-selecionada");

        } else if (selecionado == 'Getta') {

            mensagemModal("o carro selecionado foi " + selecionado, "custa " + this.valor + " você gostaria de comprar ?");
            gettaImg.classList.add("img-selecionada");

        }
    }




    vender(veiculoVender) {
        if (veiculoVender == 'Fordka') {
            valorVeiculo = prompt("Qual valor você tem?");
            if (valorVeiculo >= fordka.valor) {
                alert(`parabéns, você adquiriu o veiculo ${veiculoVender}`);
                location.reload()
            } else {
                alert(`infelizmente você não tem o valor suficiente, vai lá e venda mais um pouco e retorne com o valor de R$ ${fordka.valor}`);
                location.reload()
            }
        } else if (veiculoVender == 'Gol') {
            valorVeiculo = prompt("Qual valor você tem?");
            if (valorVeiculo >= gol.valor) {
                alert(`parabéns, você adquiriu o veiculo ${veiculoVender}`);
                location.reload()
            } else {
                alert(`infelizmente você não tem o valor suficiente, vai lá e venda mais um pouco e retorne com o valor de R$ " + ${gol.valor}`);
                location.reload()
            }


        } else if (veiculoVender == 'Getta') {
            valorVeiculo = prompt("Qual valor você tem?");
            if (valorVeiculo >= getta.valor) {
                alert(`parabéns, você adquiriu o veiculo ${veiculoVender}`);
                location.reload()
            } else {
                alert(`infelizmente você não tem o valor suficiente, vai lá e venda mais um pouco e retorne com o valor de R$ ${getta.valor}`);
                location.reload()
            }

        }






    }


}

let fordka = new Veiculo('Ford Ka', 32000);

let gol = new Veiculo('Gol', 25000);

let getta = new Veiculo('Getta', 45000);

console.log(fordka);

console.log(gol);

console.log(getta);





function chamarModal() {
    mensagemModal("Seja bem vindo!", "Qual Veiculo , você gostaria de Escolher ?");
    $("#modal_mensagem").modal("show");

    fordkaImg.onclick = function() {
        fordkaImg.classList.remove('img-selecionada');
        golImg.classList.remove("img-selecionada");
        gettaImg.classList.remove("img-selecionada");
        fordka.veiculo('Fordka');
        clicado = "Fordka";

    }

    golImg.onclick = function() {
        fordkaImg.classList.remove('img-selecionada');
        golImg.classList.remove("img-selecionada");
        gettaImg.classList.remove("img-selecionada");

        gol.veiculo('Gol');
        clicado = "Gol";
    }

    gettaImg.onclick = function() {
        fordkaImg.classList.remove('img-selecionada');
        golImg.classList.remove("img-selecionada");
        gettaImg.classList.remove("img-selecionada");
        getta.veiculo('Getta');
        clicado = "Getta";
    }



}

function mensagemModal(mensagemT, mensagemB) {
    mensagemTitle.innerHTML = mensagemT;
    mensagemBody.innerHTML = mensagemB;
}

comprar.onclick = function() {

    if (clicado == "Fordka") {
        fordka.vender(clicado);
    } else if (clicado == "Gol") {
        gol.vender(clicado);
    } else if (clicado == "Getta") {
        getta.vender(clicado);
    }


    return false;

}