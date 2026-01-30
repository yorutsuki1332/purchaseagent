function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'password') {
        window.location.href = 'success.html';
    } else {
        const failLogin = document.getElementById('FAILlogin');
        failLogin.style.display = 'block';
        failLogin.innerHTML = '<p>登入失敗，請檢查您的帳號或密碼是否正確。</p>';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    let usernameInput = document.getElementById("username");
    let passwordInput = document.getElementById("password");
    let loginButton = document.getElementById("submit");

    function addEnterKeyListener(inputField) {
        inputField.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                loginButton.click();
            }
        });
    }

    addEnterKeyListener(usernameInput);
    addEnterKeyListener(passwordInput);
});