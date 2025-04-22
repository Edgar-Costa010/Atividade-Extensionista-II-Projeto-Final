// Defiinindo as constantes no início da página
const texto = document.querySelectorAll('.acoes');
const botao = document.getElementById('botao');

// Início da lista para contar os textos que entram na tela ao clicar no botão de ações benéficas
let inicio = 0;

// Função para inicialmente os textos de ações benéficas ficarem invisíveis na tela
function hiddenTexto() {
    texto.forEach(item => item.classList.remove('show'))
}

// Função para visibilizar os textos ao clicar no botão de ações benéficas
function showTexto(){
    texto[inicio].classList.add('show')
}

// Evento para chamar a função de visibizar os textos ao clicar no botão
botao.addEventListener('click', showTexto);

// Script para apenas conferir no console se os textos estão na tela de forma invisível
console.log('texto');

// Script para apenas confirmar no console se o clic no botão está funcionando
botao.addEventListener('click', () => console.log('clicado'));