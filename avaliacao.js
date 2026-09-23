const botao = document.getElementById('enviar')
const inputNome = document.querySelector('#nome')
const containerResultado = document.getElementById('resultado')
const mensagemTexto = document.getElementById('mens')

botao.addEventListener('click', function () {
  const nomeDigitado = inputNome.value

  if (nomeDigitado.trim() === '') {
    alert('Por favor, digite seu nome antes de dar OK!')
    containerResultado.style.display = 'none'
    return
  }

  mensagemTexto.textContent =
    'Olá, ' + nomeDigitado + '! Junte-se à gangue dos Irmãos Metralha!'

  containerResultado.style.display = 'block'
  containerResultado.style.border = '2px solid #000000'
})

botao.addEventListener('mouseenter', function () {
  botao.style.backgroundColor = '#339933'
  botao.style.color = '#993300'
  botao.style.borderColor = 'transparent'
})

botao.addEventListener('mouseleave', function () {
  botao.style.backgroundColor = '#ff6600'
  botao.style.color = '#0099dd'
  botao.style.borderColor = 'transparent'
})
