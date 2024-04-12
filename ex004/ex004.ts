// Ex 001 Uso simples de Tuplas
let pessoaTupla: [string, string, number]
pessoaTupla = ['Lemos', 'Toni', 29]
console.log(pessoaTupla)

// Ex 002 Acessando valores em Tupla
let pessoa001Tupla: [string, string, number]
pessoa001Tupla = ['Lemos', 'Toni', 29]
console.log(pessoa001Tupla[0])

// Ex 003 Outra forma de usar Tuplas em ts (com labels)
let pessoa002Tupla: [nome: string, apelido: string, idade: number] = ['Silva', 'Oliveira', 30]
console.log(pessoa002Tupla)

// Ex004 Outra forma de usar tupla em ts (spreed operator)
let listaFrutasTupla: [string, ...string[]] = ['Laranja', 'Macã', 'Uva', 'Abacaxi', 'Pera']
console.log(...listaFrutasTupla)

// Ex005 Lista heterogênea de tuplas
let listaFrutasTupla002: [number, boolean, ...string[]] = [5, true, ...listaFrutasTupla]
console.log(listaFrutasTupla002)

// Ex006 uso de função com tuplas
let listarContatos = (nome: string[], idade: number[]) => {
    return [...nome, ...idade]
}
const resultado004 = (listarContatos(['Lemos', 'Silva'], [29, 8]))
console.log(resultado004)

// Ex007 Labeled Tuples com spread operator numa funcão
type Nome = 
        | [primeiroNome: string, sobreNome: string] 
        | [primeiroNome: string, nomeMeio: string, sobreNome: string] 

function criarPessoa(...nome: Nome) {
    return [...nome]
}
console.log(criarPessoa('Lemos', 'meio_Silva', 'Oliveira'))

