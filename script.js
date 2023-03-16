
//script de validaçao e alerta de envio de formulario

// Selecionar o botão de envio
const submitButton = document.querySelector('#submit-button');

// Selecionar os campos do formulário
const nameInput = document.querySelector('#name input');
const lastNameInput = document.querySelector('#last-name input');
const addressInput = document.querySelector('#adress-name input');
const passwordInput = document.querySelector('#password input');

// Adicionar evento de clique ao botão de envio
submitButton.addEventListener('click', (event) => {
  // Prevenir o envio padrão do formulário
  event.preventDefault();

  // Variável para verificar se o formulário é válido
  let isValid = true;

  // Validar o campo de nome
  if (nameInput.value.trim() === '') {
    nameInput.style.borderColor = 'red';
    nameInput.style.color='red'
    isValid = false;
  
  }else {
    nameInput.style.borderColor = '#afeeee';
    nameInput.style.color='#afeeee'

  }
  

  // Validar o campo de sobrenome
  if (lastNameInput.value.trim() === '') {
    lastNameInput.style.borderColor = 'red';
    lastNameInput.style.color='red'
    isValid = false;
  } else {
    lastNameInput.style.borderColor = '#afeeee';
    lastNameInput.style.color='#afeeee'
  }

  // Validar o campo de endereço de e-mail
  if (addressInput.value.trim() === '' || !addressInput.value.includes('@')) {
    addressInput.style.borderColor = 'red';
    addressInput.style.color='red'
    isValid = false;
  } else {
    addressInput.style.borderColor = '#afeeee';
    addressInput.style.color='#afeeee'
  }

  // Validar o campo de senha
  if (passwordInput.value.trim() === '') {
    passwordInput.style.borderColor = 'red';
    passwordInput.style.color='red'
    isValid = false;
  } else {
    passwordInput.style.borderColor = '#afeeee';
    passwordInput.style.color='#afeeee'
  }

  // Se o formulário for válido, envie-o e exiba o alerta
  if (isValid) {
    document.getElementById("login").submit();
    alert("Formulário enviado com sucesso!");
    
  }else{
    alert("Formulario não foi prenchico corretamente!")
  }
});
