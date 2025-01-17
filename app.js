let amigos = [];

function adicionarAmigo() {
    let nome = document.getElementById("amigo").value;
    console.log(nome);

    if (nome == "") {
        alert("Por favor, insira um nome!")
    }
    
    if (nome != "") {
        amigos.push(nome);
        document.getElementById("amigo").value = "";
        console.log(amigos)
    }
}