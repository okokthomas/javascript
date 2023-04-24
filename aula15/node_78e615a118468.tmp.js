let num = [5,8,4,3,9,7,2,8]
num[3] = 6

num.sort()

console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(num)
let pos = num.indexOf(8)
if(pos == -1) {
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`O valor está na posição`)
}