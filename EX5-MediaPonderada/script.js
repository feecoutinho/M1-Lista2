const lista_valores = document.querySelector('.valores')
const lista_pesos = document.querySelector('.pesos')
const resultado = document.querySelector('#resultado')

function pegar_valores(lista) {
    let valores = [];
    for(var i = 1; i<lista.length; i++) {
        valores.push(parseFloat(lista[i].value));
    }
    return valores;
}

const calcularMediaPonderada = () => {
    valores = pegar_valores(lista_valores.children);
    pesos = pegar_valores(lista_pesos.children);

    soma = 0;
    tot_pesos = 0;
    for(var i = 0; i<pesos.length; i++) {
        soma = soma + valores[i]*pesos[i];
        tot_pesos = tot_pesos + pesos[i];
    }

    resultado.innerHTML = `Resultado: ${soma/tot_pesos}`
    
}

