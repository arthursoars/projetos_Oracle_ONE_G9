// Array para armazenar a lista de amigos.
let amigos = [];

// Função para adicionar um novo amigo à lista.
function adicionarAmigo() {
    // Pega o valor digitado no campo de input.
    let nomeAmigo = document.getElementById('amigo').value;

    // Valida se o campo não está vazio.
    if (nomeAmigo == '') {
        alert('Por favor, digite um nome válido.');
        return; // Para a execução da função se o campo estiver vazio.
    }

    // Adiciona o nome do amigo ao array 'amigos'.
    amigos.push(nomeAmigo);

    // Atualiza a lista de amigos exibida na tela.
    let lista = document.getElementById('listaAmigos');
    lista.textContent = amigos.join(', '); // Exibe os nomes separados por vírgula.

    // Limpa o campo de input para a próxima entrada.
    document.getElementById('amigo').value = '';
}

// Função para realizar o sorteio do amigo secreto.
function sortearAmigo() {
    // Verifica se há amigos suficientes para o sorteio.
    if (amigos.length < 2) {
        alert('Adicione pelo menos 2 amigos para realizar o sorteio.');
        return; // Para a execução se não houver amigos suficientes.
    }

    // Gera um número aleatório entre 0 e o número de amigos - 1.
    const indiceSorteado = Math.floor(Math.random() * amigos.length);

    // Seleciona o amigo sorteado usando o índice aleatório.
    const amigoSorteado = amigos[indiceSorteado];

    // Exibe o resultado do sorteio na tela.
    let resultado = document.getElementById('resultado');
    resultado.textContent = 'O amigo secreto é: ' + amigoSorteado;
}
