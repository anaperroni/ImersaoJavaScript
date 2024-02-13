const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitro = 10;
const distanciaEmKm = 100;
const tipoCombustivel = 'Gasolina';

const litrosConsumidos = distanciaEmKm / kmPorLitro;

if (tipoCombustivel === 'Etanol') {
  const ValorGasto = litrosConsumidos * precoEtanol;
  console.log( 'Você está usando Etanol e o valor gasto é de '+ ValorGasto.toFixed(2) + ' reais');
} else {
  const ValorGasto = litrosConsumidos * precoGasolina;
  console.log('Você está usando Gasolina e o valor gasto é de ' + ValorGasto.toFixed(2) + ' reais');
}
