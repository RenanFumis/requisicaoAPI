//Utilizando a API https://viacep.com.br/ws/${cep}/json/ para busca de endereços

const inputCep = document.querySelector('#cep')
const btn = document.querySelector("#btn")
const resultado = document.querySelector('#resultadoCEP')

btn.addEventListener('click', clicou)

inputCep.addEventListener('keydown', function (e){
  if(e.key === 'Enter'){
   e.preventDefault()
   clicou(e)
  }
  //essa função é para quando o usuário apenas clicar no botão enter
})

function clicou(event){
  event.preventDefault()
  const cep = inputCep.value  
  buscaCEP(cep)
 
}
function buscaCEP(cep){

  

fetch(`https://viacep.com.br/ws/${cep}/json/`)
.then(response => response.json())
.then(endereco => {
  const enderecosLocalidade = `
  <p>Rua: ${endereco.logradouro}</p>
  <p>Bairro: ${endereco.bairro}</p>
  <p>Cidade: ${endereco.localidade}</p>
  `


  resultado.innerHTML = enderecosLocalidade
  


})

}


//utilizando a API https://blockchain.info/ticker para verificação do valor da bitcoin

const btcValores = document.querySelector('.btc')

function valorBtc(){
  fetch('https://blockchain.info/ticker')
  .then(response => response.json())
  .then(btcJson =>{
    console.log(btcJson.BRL.buy)
    btcValores.innerText = ('R$ ' + btcJson.BRL.buy).replace('.', ',')
  })

}
// setInterval(valorBtc, 1000 * 30) //Aqui permitimos que o valor seja atualizado a cada 30segundo (está desabilitado pois a API tem limites de aquisições)
valorBtc()


//Utilizando a API https://api.chucknorris.io/jokes/random para as piadas aleatórias

const piada = document.querySelector('.piada')
const botao = document.querySelector('.proxima')

function piadaChuck(){
  fetch('https://api.chucknorris.io/jokes/random')
  .then(r => r.json())
  .then(piadas =>{
    piada.innerText = piadas.value
  })
}

botao.addEventListener('click', piadaChuck)

piadaChuck()