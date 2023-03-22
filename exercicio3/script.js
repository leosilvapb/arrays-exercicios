// a) Adicione um item number ao início do primeiro array. Utilize console.log() para exibir o original e a cópia.

// b) Remova o último item do segundo array. Utilize console.log()  para exibir o original e a cópia.

// c) Remova o segundo item do terceiro array. Utilize console.log() para exibir o original e a cópia.

// Obs: copie os arrays criados no exercício 1 para dentro do arquivo script.js do exercício 3.

const arrayNumber = [1, 3, 5, 2, 6, 8, 19]
const arrayNumberCopia = arrayNumber.slice()

const arrayString = ["Leo", "Silva", "labenu" ]
const arrayStringCopia = arrayString.slice()

const arrayMisturado = ["leonardo", 2023, true]
const arrayMisturadoCopia = arrayMisturado.slice()

//A)

arrayNumberCopia.unshift(22)
console.log(arrayNumber)
console.log(arrayNumberCopia)


console.log("==========================================")
//B)

arrayStringCopia.pop()
console.log(arrayString)
console.log(arrayStringCopia)


console.log("==========================================")
//C)

arrayMisturadoCopia.splice(1,1)
console.log(arrayMisturado)
console.log(arrayMisturadoCopia)