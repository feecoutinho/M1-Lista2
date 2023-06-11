const nome = document.querySelector('#nome')
const sobrenome = document.querySelector('#sobrenome')
const resultado = document.querySelector('#resultado')

const juntar = () => {
    texto_nome = nome.value;
    texto_sobrenome = sobrenome.value;
    resultado.innerHTML = `Olá ${texto_nome+' '+texto_sobrenome}!`
}