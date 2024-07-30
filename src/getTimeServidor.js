const md5 = require("md5")

// process.env.TZ = 'America/Sao_Paulo';
// const currentDate = new Date()
// currentDate.toLocaleString('en', { timeZone: 'America/Sao_Paulo' })

// console.log(x)
// console.log(currentDate)
// console.log(md5(x))

const date = new Date();

// Define o deslocamento do fuso horário em minutos (por exemplo, -3 horas para Brasília)
const offset = -3 * 60;

// Converte a data para o fuso horário desejado
const currentDate = new Date(date.getTime() + (offset * 60000));
const x = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1 < 10 ? '0' + (currentDate.getMonth() + 1) : currentDate.getMonth() + 1}-${currentDate.getDate()}`

console.log(currentDate)

console.log(x)
console.log(currentDate)
console.log(md5(x))

console.log('------')

console.log(md5('2024-07-28'))