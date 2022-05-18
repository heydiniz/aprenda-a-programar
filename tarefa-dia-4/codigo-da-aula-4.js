let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};


if (produtoA.internacional == true) {
    //executa se for verdadeiro
    let preco = produtoA.valor
    let imposto = 0.2


    let valorComImposto = preco + preco * imposto
    console.log("O valor é inernacional")
    console.log("O valor com impostos é: ", valorComImposto)

} else {
    //executa se for falso
    console.log("O produto é nacional")
    console.log("O valor com impostos é: ", produtoA.valor + produtoA.valor * 0.12)
}
