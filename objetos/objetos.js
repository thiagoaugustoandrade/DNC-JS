let jogador = {
    nome: 'Renato Augusto',
    idade: 34,
    numGol: 81, 
    Gol(g=0){
        console.log('Renato fez gol!')
        this.numGol += g
    }
}

//console.log(jogador.nome)
//console.log(jogador.numGol)
//jogador.Gol()
//console.log(jogador.numGol)

jogador.posicao = 'Meio Campo'
console.log(jogador)

delete jogador.idade
console.log(jogador)