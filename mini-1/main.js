
/*login popup open */

document.getElementById('loginbutton').addEventListener('click', function () {
    document.querySelector('.popup').style.display = 'flex';
});
//close
document.getElementById('loginclose').addEventListener('click', function () {
    document.querySelector('.popup').style.display = 'none';
});


//REGISTER POPUP OPEN
document.getElementById('registerbutton').addEventListener('click', function () {
    document.querySelector('.popup2').style.display = 'flex';
});

//CLOSE
document.getElementById('registerclose').addEventListener('click', function () {
    document.querySelector('.popup2').style.display = 'none';
});


//login required//
const loginfield = document.getElementById('logininput');//username input
const passwordfield = document.getElementById('passwordinput');//password input
const loginfieldbutton = document.getElementById('loginogbutton');//button
const usernamerequired = document.getElementById('usernamerequired');//h2 inner HTML for username
const loginform = document.getElementById('loginform');//login form
const passwordrequired = document.getElementById('passwordrequired');//inner html for password


//recieving value from local storage 

const uservalid = localStorage.getItem('firstname');
const passvalid = localStorage.getItem('pass');


loginfieldbutton.addEventListener('click', (e) => {
    if (loginfield.value === '' || loginfield.value === null) {
        usernamerequired.innerHTML = 'username required';
        e.preventDefault();
    } else if (passwordfield.value === '' || passwordfield.value == null) {
        passwordrequired.innerHTML = 'password required';
        e.preventDefault();
    } else if (passwordfield.value.length < 5) {
        passwordrequired.innerHTML = 'enter atleast 6 characters';
        e.preventDefault();

        //for connecting my username and password
    } else if (loginfield.value == uservalid && passwordfield.value == passvalid) {
        window.location.href = 'secondpage.html';
        e.preventDefault();
    }
});


//register required//
const firstname = document.getElementById('firstname'); //firstname
const registerpassword = document.getElementById('registerpassword'); //password
const confregisterpassword = document.getElementById('confregisterpassword'); //confirm password
const lastname = document.getElementById('lastname'); //lastname
const registerogbutton1 = document.getElementById('registerogbutton');//button

const usernamerequiredreg = document.getElementById('usernamerequiredreg'); //inner username
const lastnamerequiredreg = document.getElementById('lastnamerequiredreg'); //inner lastname
const passwordrequiredreg = document.getElementById('passwordrequiredreg'); //inner conf pasword
const confpasswordrequiredreg = document.getElementById('confpasswordrequiredreg'); //inner conf password



registerogbutton1.addEventListener('click', (e) => {
    if (firstname.value === '' || firstname.value === null) {
        usernamerequiredreg.innerHTML = 'enter username';
        e.preventDefault();
    } else if (lastname.value === '' || lastname.value === null) {
        lastnamerequiredreg.innerHTML = 'enter email';
        e.preventDefault();
    } else if (registerpassword.value === '' || registerpassword.value == null) {
        passwordrequiredreg.innerHTML = 'enter password';
        e.preventDefault();
    } else if (registerpassword.value.length < 6) {
        passwordrequiredreg.innerHTML = 'enter alteast 6 characters';
        e.preventDefault();
    } else if (confregisterpassword.value === '' || confregisterpassword.value === null) {
        confpasswordrequiredreg.innerHTML = 'please confirm password';
        e.preventDefault();

    } else if (confregisterpassword.value.length < 6) {
        confpasswordrequiredreg.innerHTML = 'enter atleast 6 characters';
        e.preventDefault();



        //for storing username and password to localstorage;
    } else if (firstname.value) {
        localStorage.setItem('firstname', firstname.value);
        localStorage.setItem('pass', registerpassword.value);
    }
})


