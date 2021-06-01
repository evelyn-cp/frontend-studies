//EXERCÍCIO CUPOM DE DESCONTO CUBOS ACADEMY
//Cupom RANGOBARATO
//Apenas das 12h as 13:59h (14gh não pode)
//Se tiver cupom e estiver dentro do horário, tem 10% de desconto
//Se além disso, a compra for de 100 reais ou mais, desconto de 20%

function imprimirValorDoDesconto(valorDaCompra, hora, cupom) {
    let valorDoDesconto;
    if (cupom === "RANGOBARATO") {
        if (hora >= 12 && hora <14) {
            if (valorDaCompra >=100) {
                valorDoDesconto = valorDaCompra * 20/100;
                } else {
                valorDoDesconto = valorDaCompra * 10/100;
                }
                console.log(`O valor do desconto é ${valorDoDesconto}.`);

            } else {
                console.log("Esse cupom não é válido nesste horário.");
            }
        } else {
            console.log("Este cupom não é aplicável.");
        }

}

imprimirValorDoDesconto(100, 13, "RANGOBARATO");