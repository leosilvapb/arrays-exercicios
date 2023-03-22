// a) Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão).

// b) Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array.

// c) Verifique se um item está incluído no primeiro array e depois no terceiro array. Imprima o resultado dessas verificações no console.log(). A primeira impressão deve retornar um booleano true e a segunda deve retornar um booleano false.

// Obs: copie os arrays criados no exercício 1 para dentro do arquivo script.js do exercício 2.

const arrayNumber = [1, 3, 5, 2, 6, 8, 19]
const arrayString = ["Leo", "Silva", "labenu" ]
const arrayMisturado = ["leonardo", 2023, true]

//A)
console.log(arrayNumber.length)
console.log(arrayString.length)
console.log(arrayMisturado.length)

console.log("==========================================")

//B)

console.log(arrayNumber[0])
console.log(arrayString[1])
console.log(arrayMisturado[2])

console.log("==========================================")


//C)

console.log(arrayNumber.includes(1))
console.log(arrayMisturado.includes("labenu"))
