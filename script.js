// Pedido de um cliente que montaremos conforme id dos itens
let pedido = {
  nomes: [],
  precoTotal: 0,
  pesos: {
    'gramas': 0,
    'mililitros': 0
  },
}

// Função será responsável por atualizar a variável nomes
function definirNome(minhaListaDeProdutos){
  let nomes = []

  for(let i = 0; i < minhaListaDeProdutos.length; i ++) {
      nomes.push(minhaListaDeProdutos[i].nome)
  }

  pedido.nomes = nomes
}


// Função será responsável por atualizar a variável precoTotal
function definirPrecoTotal(minhaListaDeProdutos){
  for(let i=0; i< minhaListaDeProdutos.length; i++){
    pedido.precoTotal += minhaListaDeProdutos[i].preco
  }
}

// Função será responsável por atualizar a variável pesos
function definirGramasEMililitros (produtos){

  let peso = ""
  let tamanhoPeso = ""
  let numeroFinal = 0

  for(let i=0; i< produtos.length; i++){
    peso = produtos[i].peso
    tamanhoPeso = peso.length - 1

    if(peso[tamanhoPeso] == 'g'){
      numeroFinal = peso.split('').slice(0, tamanhoPeso).join('')

      pedido.pesos.gramas += parseFloat(numeroFinal)

    } else{
      numeroFinal = peso.split('').slice(0, tamanhoPeso - 1).join('')

      pedido.pesos.mililitros += parseFloat(numeroFinal)

    }

  }
}

// Função será responsavel por atualizar a variavel minhaListaDeProdutos 
function encontrarItensPeloId(idList){
  let arr = new Array()

  let i = 0

  for (let key in cardapio) {
    i = 0

    if (cardapio.hasOwnProperty(key)) {
      while( i < idList.length){

        if(cardapio[key].id  == parseInt(idList[i]) ) {
          arr.push(cardapio[key])
        }
        i++
      }
    }
  }

  return arr
}

// Função será responsável pela apresentação do pedido. Obs: usar console.log() invés return na string criada.
function apresentacao() {
  console.log(pedido)
}

// Função principal da nossa aplicação, será responsável por chamar as funções.
function principal(idDosProdutosComprados){
  // objetos que serão filtrados conforme o id dos itens. Obs: esse sera nosso array de objetos.
  const minhaListaDeProdutos = encontrarItensPeloId(idDosProdutosComprados);

  // atualizar nomes
  definirNome(minhaListaDeProdutos);

  // atualiar pesos
  definirGramasEMililitros(minhaListaDeProdutos);

  // atualizar precoTotal
  definirPrecoTotal(minhaListaDeProdutos);

  // apresentação do pedido
  apresentacao()
}

principal([1, 3, 7])
