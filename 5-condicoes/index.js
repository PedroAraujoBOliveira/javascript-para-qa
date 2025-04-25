function verificarMaiorIdade(idade) {
    if (idade >= 18) {
        return "Pode entrar"
    } else {
        return "Você não tem idade"
    }
}

function compararNumeros(num1, num2) {
    if(num1 > num2) {
        return "Numero 1 Maior que Numero 2"
    } else if (num1 < num2) {
        return "Numero 2 Maior que Numero 1"
    } else if(num1 === num2) {
        return "Os numeros possuem o mesmo valor"
    }
}


function verificarNegativo(numero) {
    if (numero < 0) {
        return "Negativo"
    } else if (numero > 0) {
        return "Positivo"
    } else {
        return "Numero 0"
    }
}

function diaDaSemana(numero) {
    switch (numero) {
        case 1: 
            return "Domingo"
        case 2: 
            return "Segunda-feira"
        case 3: 
            return "Terça-feira"
        case 4: 
            return "Quarta-feira"
        case 5: 
            return "Quinta-feira"
        case 6: 
            return "Sexta-feira"
        case 7: 
            return "Sábado"
        default:
            return "Esse numero é inválido"
    }
}

console.log(diaDaSemana(7))