/*global document, alert, console*/

function validateForm() {
    "use strict";
    var name = document.getElementById('name'),
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
        document.getElementById('tt-00').style.display = "block";
    } else {
        document.getElementById('tt-00').style.display = "none";
    }

    if (lastname.value === '' || lastnameChat !== lastnameChat.toUpperCase() || regName.test(lastname.value) === false) {
        document.getElementById('tt-01').style.display = "block";
    } else {
        document.getElementById('tt-01').style.display = "none";
    }

    if (email.value === '' || !regEmail.test(email.value)) {
        document.getElementById('tt-02').style.display = "block";
    } else {
        document.getElementById('tt-02').style.display = "none";
    }

    if (password.value === '' || password.value.length < 6 || password.value === '123456' || password.value === '098754' || password.value === 'password') {
        document.getElementById('tt-03').style.display = "block";
    } else {
        document.getElementById('tt-03').style.display = "none";
    }

    if (dropDown.value === '0') {
        document.getElementById('tt-04').style.display = "block";
    } else {
        document.getElementById('tt-04').style.display = "none";
    }
}