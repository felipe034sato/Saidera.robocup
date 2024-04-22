//Função para selecionar os elementos do BOM(armazenar dados) usando o seletor CSS
const $ = (elemento) => document.querySelector(elemento);


$("#cadastro").addEventListener("click", (evento)=>
//Aguardar o comportamento padrao do mouese
//Realmente apertar o botão
(evento.preventDefault()));
//obter os valores dos campos do formulario
//crianmos uma funçõo que vai trazer a informação para as variaveis
const nome = $("#nome").value;
const email = $("#email").value;
const login = $("#login").value;
const senha = $("#senha").value;
const confirmasenha = $("#Confirmar senha").value;

//Verificar se a senha é a mesma que a cadastrada
const senhaConfirmada = senha == confirmasenha;
//validar senha
if(!senhaConfirmada){
    alert("A senha esta incorreta, tente novamente");
    return;
}

//verificar todos os campos foram prenchidos
const tudoPrenchido = 
nome.length !== 0 &&
email.length !== 0 &&
senha.length !== 0 &&
confirmasenha.length !== 0;

if(! tudoPrenchido){
    alert("Todos os campos devem ser preenchidos");
    return;
    //o return serve para não proseguir e sim voltar para o formulario
}

//criar um objeto que representa o cadastro do usuario
const usuarioCadastrado = {
    nome,
    email,
    login,
    senha,
    confirmaSenha,
};
//converter este objeto em um arquivo JSQN
const stringUsuario = JSQN.stringify(usuarioCadastrado);
//o proprio js converte para um arquivo JSQN
//armazenar os dados no LocalStorge(banco de dados escondido)
localStorage.setItem("usuario", stringUsuario);
alert("Usuario cadastrado com sucesso!")
//redirecionar para tela de login
window.location

