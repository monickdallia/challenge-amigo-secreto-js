let amigos = [];

// adicionar amigos 
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim(); 
    // Validar se o campo está vazio
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }
    // Adiciona o nome ao array de amigos
    amigos.push(nome);

    // Limpa o campo de entrada
    input.value = "";

    atualizarLista();
}

// atualizar a lista de amigos na página
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");

    lista.innerHTML = "";

    for (let amigo of amigos) {
        const item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    }
}

// sortear um amigo 
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista está vazia. Adicione pelo menos um nome antes de sortear.");
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>O amigo sorteado é: <strong>${amigoSorteado}</strong></li>`;
}
