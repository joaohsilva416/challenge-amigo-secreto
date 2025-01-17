let amigos = [];

function adicionarAmigo() {
    let nome = document.getElementById("amigo").value;
    console.log(nome);

    if (nome.trim() === "") {
        alert("Por favor, insira um nome!");
    } else if(!amigos.includes(nome)) {
        amigos.push(nome.trim());
        document.getElementById("amigo").value = "";
        console.log(amigos);
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
        console.log(newEl);
        lista.appendChild(newEl);
        console.log(lista);
    });
}
