function presente (dinheiro, valor){
    if (dinheiro < valor){
        return 'Não vai dar pra comprar'
    }else{
        return 'Vc realmente precisa comprar isso?'
    }
}

let x = presente(100, 90)
console.log(x)