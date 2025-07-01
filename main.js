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


document.getElementById('username').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById('sumbit').click();
    }
});

document.getElementById('password').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById('sumbit').click();
    }
});