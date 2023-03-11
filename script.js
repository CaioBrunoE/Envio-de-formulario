
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
    isValid = false;
  } else {
    nameInput.style.borderColor = '';
  }

  // Validar o campo de sobrenome
  if (lastNameInput.value.trim() === '') {
    lastNameInput.style.borderColor = 'red';
    isValid = false;
  } else {
    lastNameInput.style.borderColor = '';
  }

  // Validar o campo de endereço de e-mail
  if (addressInput.value.trim() === '' || !addressInput.value.includes('@')) {
    addressInput.style.borderColor = 'red';
    isValid = false;
  } else {
    addressInput.style.borderColor = '';
  }

  // Validar o campo de senha
  if (passwordInput.value.trim() === '') {
    passwordInput.style.borderColor = 'red';
    isValid = false;
  } else {
    passwordInput.style.borderColor = '';
  }

  // Se o formulário for válido, envie-o e exiba o alerta
  if (isValid) {
    document.getElementById("login").submit();
    alert("Formulário enviado com sucesso!");
  }
});
