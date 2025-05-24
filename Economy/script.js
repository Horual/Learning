function validateFields() {
    toggleButtonsDisable(); 
}

function isEmailValid(){
    const email = form.email().value;
       
    form.msgEmail().style.opacity = email ? 0 : 1;
    form.msgEmail().textContent = email ? "msg" : "Entrez votre e-mail";
    
    if (!email) {
        return false;
    } 
    
    const test = validateEmail(email);
    form.msgEmail().style.opacity = test ? 0 : 1;
    form.msgEmail().textContent = test ? "msg" : "Entrez votre e-mail";
    form.msgPwd().style.opacity = 0;
    form.msgPwd().textContent = "msg";

    return test;
}

function isPasswordValid(){
    const password = form.password().value;
    form.msgPwd().style.opacity = password ? 0 : 1;
    form.msgPwd().textContent = password ? "msg" : "Entrez votre mot de passe";
    if (!password) {
        return false;
    } 
    return true;
}

function toggleButtonsDisable() {
    const emailValid = isEmailValid();
    const passwordValid = isPasswordValid();
    form.recPwd().disabled = !emailValid;
    form.login().disabled = !emailValid || !passwordValid;
    form.signup().disabled =  !emailValid || !passwordValid;
}

const form = {
    email: () => document.getElementById("email"),
    password: () => document.getElementById("password"),
    msgPwd:  () => document.getElementById("msgPassword"),
    msgEmail: () => document.getElementById("msgPassword"),
    signup: () => document.getElementById("sign-up-button"),
    recPwd: () => document.getElementById("recover-password-button"),
    login: () => document.getElementById("login-button")
}