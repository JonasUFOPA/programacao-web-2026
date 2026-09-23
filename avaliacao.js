// Configuração do formulário do nome e do botão de envio
const botao = document.getElementById('enviar')
const inputNome = document.querySelector('#nome')
const containerResultado = document.getElementById('resultado')
const mensagemTexto = document.getElementById('mens')

// Adicionando evento de clique ao botão
botao.addEventListener('click', function () {
  const nomeDigitado = inputNome.value

  // Verificando se o campo de nome está vazio
  if (nomeDigitado.trim() === '') {
    alert('Por favor, digite seu nome antes de dar OK!')
    containerResultado.style.display = 'none'
    return
  }

  // Exibindo a mensagem personalizada com o nome digitado
  mensagemTexto.textContent =
    'Olá, ' + nomeDigitado + '! Junte-se à gangue dos Irmãos Metralha!'

  containerResultado.style.display = 'block'
  containerResultado.style.border = '2px solid #000000'
})

// Adicionando eventos de mouse para alterar a aparência do botão
botao.addEventListener('mouseenter', function () {
  botao.style.backgroundColor = '#339933'
  botao.style.color = '#993300'
  botao.style.borderColor = 'transparent'
})

// Adicionando evento de mouse para restaurar a aparência original do botão
botao.addEventListener('mouseleave', function () {
  botao.style.backgroundColor = '#ff6600'
  botao.style.color = '#0099dd'
  botao.style.borderColor = 'transparent'
})
