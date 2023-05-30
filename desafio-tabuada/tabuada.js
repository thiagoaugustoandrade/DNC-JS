function tabuada(){
    var num = document.getElementById('num')
    var end = document.getElementById('end')
    if(num.value.length == 0 || end.value.length == 0){
        alert('[ERRO] Confira os seus dados')
    } else{
        var n = Number(num.value)
        var e = Number(end.value)
        var x = 0
        var r = ''
        var res = document.getElementById('resposta')
        res.innerHTML = `A Tabuada do ${n} é:`
        do{
            r = n * x
            res.innerHTML += `${x} X ${n} = ${r} <br>`
            x++
        } while(x <= e)
    }
}
