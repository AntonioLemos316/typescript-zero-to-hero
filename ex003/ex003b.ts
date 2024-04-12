// Esse Boolean é do tipo objeto
const ex001 = Boolean
console.log(typeof(ex001))

// Esse boolean aqui é o tipo primitivo, o qual usaremos
const ex002: boolean = true
console.log(typeof(ex002))

// Exemplo de Boolean
let tarefaConcluida: boolean = true
let tarefaPendente: boolean = false

console.log(tarefaConcluida)
console.log(tarefaPendente)

// Mais exemplos de Boolean

let concluida: boolean = false

if (!concluida){
    console.log('A tarefa foi concluída')
} else {
    console.log('A tarefa não foi concluída')
}