const precoCombustivel = 5.79;
const kmPorLitro = 12;
const distanciaKM = 100;

const litrosConsumidos = distanciaKM / kmPorLitro;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2));
