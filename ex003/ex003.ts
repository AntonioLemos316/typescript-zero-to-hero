// Primeiro exemplo: constante com type annotation do tipo number
const adcionarNumeros = (num1: number, num2: number) => {
    return num1 + num2
}
const resultado = adcionarNumeros(1, 3)
console.log(resultado)

// Segundo exemplo: constante com type annotation do tipo string
const nome: string = 'Lemos'
console.log(nome)

// Terceiro exemplo: Array de string
const animais: string[] = ['Cachorro', 'Gato', 'Cavalo']
console.log(animais)

// Quarto exemplo: Array de numbers
const precos: number[] = [15.00, 21.00, 3.00]
console.log(precos)

// Quinto exemplo: Objeto literal
let pessoa: { 
    nome: string, 
    idade: number 
}
pessoa = {
    nome: 'Lemos', 
    idade: 29
}
console.log(pessoa)

