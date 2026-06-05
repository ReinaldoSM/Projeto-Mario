/*
Variavel - caixinha para guardar informações que serão utilizadas

palavrinhas mágicas para criar variaveis: var, let, const

var - não é mais utilizado

let - criar variaveis que podem ser alteradas

const - criar variaveis que não podem ser alteradas
*/



/* FUNÇÕES:
 é um trecho de código que, só é executado, quando chamado (quando nós quisermos)

 palavrinha mágica para criar funções
 function - criar funções
  - nome da função
  - parênteses (onde ficam os parâmetros)
  - chaves (onde fica o código da função)
 */

/*
    Objetivo:quando clicar no botao, mostra o formulario e a mascara.
    1 - Qual botão clicar?
    2 - Qual formulário?
    3 - Qual mascara?
    4 - O que é Mostrar?
        - Trazer o formulário da esquerda para a direita
        - centralizar o formulário na tela
        - Exibir a mascara
*/ 

const formulario = document.querySelector(".formulario");
const mascara = document.querySelector(".mascara-form");
const botaoFaleConosco = document.querySelector(".botao-fale-conosco");





  function mostrarForm(){
    formulario.style.left = "50%";
    formulario.style.transform = "translateX(-50%)";
    mascara.style.visibility = "visible";
 }

 function esconderForm(){
    formulario.style.left = "-440px";
    formulario.style.transform = "translateX(0)";
    mascara.style.visibility = "hidden";



 }

 function botaofaleConosco(){
    mostrarForm();
 }

 /* 
 Objetivo; Quando clicar no botão falenConosco, mostrar formulario.

 1- Qual botão clicar? Botão "Fale Conosco"
 2- Qual formulário? Formulário?
 3- O que é mostrar? Trazer o formulário da esquerda para a direita, centralizar o formulário na tela e exibir a mascara.
    - Trazer o formulário da esquerda para a direita: alterar a propriedade left para 50%
    -centralizar o formulário na tela: alterar a propriedade transform para translateX(-50%) 
 */

    



