const precoEtiqueta = 100.00;
const formaPagamento = 2; 

if (formaPagamento === 1){
    console.log(precoEtiqueta - (precoEtiqueta * 0.1))
} else if(formaPagamento === 2){
    console.log(precoEtiqueta - (precoEtiqueta * 0.15))
} else if (formaPagamento === 3){
    console.log(precoEtiqueta)
} else {
    console.log(precoEtiqueta + (precoEtiqueta * 0.1))
}