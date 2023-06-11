const nome = document.querySelector('#nome')
const idade = document.querySelector('#idade')
const resultado = document.querySelector('#resultado')

const aluno = {
    nome: "",
    idade: 0
}

const cadastrar = () => {
    aluno.nome = nome.value;
    aluno.idade = idade.value;
    resultado.innerHTML = `Olá ${aluno.nome}, você tem mesmo ${aluno.idade} anos?`
}