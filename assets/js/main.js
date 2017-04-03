/*global document, alert, console*/

function validateForm() {
    "use strict";
    var error = "",
        name = document.getElementById('name'),
        lastname = document.getElementById('lastname'),
        email = document.getElementById('input-email'),
        password = document.getElementById('input-password'),
        dropDown = document.getElementsByClassName('form-control')[4],
        form = document.querySelector(".form-signup"),
        nameChar = name.value.charAt(0),
        lastnameChat = lastname.value.charAt(0),
        regName = /([A-ZÁÉÍÓÚ][a-zñáéíóú]+[\s]*)+$/,
        regEmail = /\S+@\S+\.\S+/;

    if (name.value === '' || nameChar !== nameChar.toUpperCase() || regName.test(name.value) === false) {
        alert('error');
        name.focus();
    } else if (lastname.value === '' || lastnameChat !== lastnameChat.toUpperCase() || regName.test(lastname.value) === false) {
        alert('error');
        lastname.focus();
    } else if (email.value === '' || !regEmail.test(email.value)) {
        alert('error');
        email.focus();
    } else if (password.value === '' || password.value.length < 6 || password.value === '123456' || password.value === '098754' || password.value === 'password') {
        alert('error');
        password.focus();
    } else if (dropDown.value === '0') {
        alert('error');
        dropDown.focus();
    } else {
        form.reset();
    }
}