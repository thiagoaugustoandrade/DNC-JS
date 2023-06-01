class Produto{

    constructor(){
        this.id = 1;
        this.arrayProdutos = [];
    }


    Adicionar(){
        let produto = this.lerDados()
        if(this.Validar(produto) == true){
            this.Salvar(produto)
        }

    }

    lerDados(){
        let produto ={}

        produto.id = this.id;
        produto.nomeProduto = document.getElementById('pdNome').value
        produto.nomeProduto = document.getElementById('pdPreco').value

        return produto

    }

    Validar(produto){
        let msg = '';

        if(produto.nomeProduto == ''){
            msg += 'Por favor, insira corretamente o nome do produto! \n'
        }

        if(produto.precoProduto == ''){
            msg += 'Por favor, insira corretamente o preço do produto! \n'
        }

        if(msg != ''){
            alert(msg)
            return false
        }

        return true
    }

    Salvar(produto){
        this.arrayProdutos.push(produto)
        this.id++;
    }
}

var produto = new Produto();