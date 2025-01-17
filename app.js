let amigos = [];

function adicionarAmigo() {
    let nome = document.getElementById("amigo").value;

    if (nome.trim() === "") {
        alert("Por favor, insira um nome!");
    } else if(!amigos.includes(nome)) {
        amigos.push(nome.trim());
        document.getElementById("amigo").value = "";
        atualizarAmigos();
    } else {
        alert("Este nome já foi adicionado!");
    }
}

function atualizarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(nome => {
        let newEl = document.createElement('li');
        newEl.textContent = nome;
        lista.appendChild(newEl);
    });
}

function sortearAmigo() {
    if(amigos.length === 0) {
       alert('Nenhum nome adicionado, o sorteio não pode ser realizado!');
       return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `Seu amigo secreto é: ${amigoSorteado}`;
}