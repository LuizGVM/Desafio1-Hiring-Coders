const form = document.getElementById('form')
const inputName = document.getElementById('inputName');
const inputEmail = document.getElementById('inputEmail');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = inputName.value; 
    let email = inputEmail.value;
    let data = {name, email}
    let local = localStorage.getItem('cadastro')
    local = JSON.parse(local);
    if (name == 0 || email == 0){
        let message = document.getElementById('form-msg')
        message.innerHTML = `<p>Insira nome e/ou email</p>`
    }
    else{
        localStorage.setItem('cadastro', JSON.stringify(data));
        let message = document.getElementById('form-msg')
        message.innerHTML = `<p>Cadastro realizado com sucesso!</p>`
    }
    if(local.name === name || local.email === email){
        let message = document.getElementById('form-msg')
        message.innerHTML = `<p>Nome ou email já cadastrado</p>`
    }
    inputName.value = null;
    inputEmail.value = null;
})