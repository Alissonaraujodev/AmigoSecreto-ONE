let listaDeNomes = [];
let listaDeAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado')

function adicionarAmigo(){
    let nome = document.getElementById('amigo').value;
    if (nome && !listaDeNomes.includes(nome)) {
        listaDeNomes.push(nome);
    } else {
        alert('Nome inválido ou já adicionado!');
    }
    limparCampo();
    listaDeAmigos.innerHTML += nome + '<br>';
}

function limparCampo(){
    let nomeAdicionado = document.getElementById('amigo');
    nomeAdicionado.value = '';
}

function sortearAmigo(){
    if (listaDeNomes.length < 2) {
        console.log('Adicione pelo menos 2 amigos para o sorteio!');
        return null;
    }

    const indiceSorteado = Math.floor(Math.random() * listaDeNomes.length);
    let amigoSorteado = listaDeNomes[indiceSorteado];
    resultado.innerHTML = `O amigo sorteado é: ${amigoSorteado} `
    listaDeAmigos.innerHTML = ''
}