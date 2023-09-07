
const user = document.getElementById('user');
const passw = document.getElementById('password');
const loginuser = document.getElementById('btn');

function loginf() {
    location.href = './login.html'
}

function addLocal() {
    localStorage.setItem('username', String(user.value))
    localStorage.setItem('pass', String(password.value))
    location.href = './home.html';
}

let username = localStorage.getItem('username');

function login() {
    if (loginuser.value === username && loginuser.value === password) {
        location.href = './home.html'
    }
}