const peso = 90;
const altura = 1.52;
const imc = peso / Math.pow(altura,2);

if (imc < 18.5){
    console.log('Abaixo do peso');
} else if (imc > 18.5 && imc <= 25){
    console.log('Você está no peso ideal');
} else if(imc> 25 && imc <= 30){
    console.log('Você está acima do peso')
} else if (imc > 30 && imc <= 40) {
    console.log('Você está obeso')
} else {
    console.log('Obsidade Grave')
}
