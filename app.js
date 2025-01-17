let amigos = [];

function adicionarAmigo() {
    let nome = document.getElementById("amigo").value;
    console.log(nome);

    if (nome.trim() === "") {
        alert("Por favor, insira um nome!")
    } else if(!amigos.includes(nome)) {
        amigos.push(nome.trim());
        document.getElementById("amigo").value = "";
        console.log(amigos);
    } else {
        alert("Este nome já foi adicionado!");
    }
}