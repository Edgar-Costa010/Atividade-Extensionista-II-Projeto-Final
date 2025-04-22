// Criação de uma lista para salvar as ações digitadas
let lista = [];

// Início da função de adicionar ações
function adicionarAcao(){

    let acoesBeneficas = document.getElementById('acoesBeneficas');

    // variável para guardar os valores das ações digitados no imput e evitar que ele tenha espaços no inicio e fim, evitando que receba valores vazios
    let acoes = acoesBeneficas.value.trim();

    const retorno = document.getElementById('texto');

    // condicional para verificar que o espaço de digitação não ficou em branco e não adicionar ações vazias
    if(acoes == ""){
        let erro = "Você precisa escrever uma boa ação!"
       retorno.textContent = erro;
    }
    else {
        let sucesso = "Você inseriu a ação:";
        retorno.textContent = sucesso;
        lista.push(acoes);
        renderizarAcoes();
    }

    // Comando para limpar automaticamente o campo de input após o usuário confirmar a ação
    acoesBeneficas.value = "";

    console.log(acoes)
}

// Função para renderizar tarefas e criar um loop para que seja possível editar e deletar textos escritos incorretamente
function renderizarAcoes() {
    let listaAcoes = document.getElementById('listaAcoes');

    listaAcoes.innerHTML = ""

    for ( let i = 0; i < lista.length; i++){
        let novaAcao = document.createElement('li');
        novaAcao.textContent = lista[i]

        // Criando um botão para excluir as ações incorretas
        let botaoExcluir = document.createElement('button');
        botaoExcluir.className = "botaoExcluir";
        botaoExcluir.textContent = "Excluir";
        botaoExcluir.onclick = () => excluir (i);

        // Criando o botão de editar frases
        let botaoEditar = document.createElement('button');
        botaoEditar.className = "botaoEditar";
        botaoEditar.textContent = "Editar"
        botaoEditar.onclick = () => editar(i);

        novaAcao.appendChild(botaoEditar);
        novaAcao.appendChild(botaoExcluir);
        listaAcoes.appendChild (novaAcao);
    }
}
// Função para excluir as ações incorretas
function excluir (i){
    lista.splice(i, 1)
    renderizarAcoes()
}

// Função para editar frases com erros
function editar (i){
    let edicao = prompt("Edite a frase: ")
    if (edicao.trim() !== ""){
        lista[i] = edicao
        renderizarAcoes()
    }
}

function excluirLista (){
    lista.length = 0
    renderizarAcoes()
    const retorno = document.getElementById('texto');
    retorno.textContent = "Lista de ações vazia"
}

