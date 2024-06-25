const firstnamein = document.getElementById('firstnamein'); // inner HTML firstname
const lastnamein = document.getElementById('lastnamein'); // inner HTML lastname
const adressinner = document.getElementById('adressinner'); // address inner HTML
const phonenumber = document.getElementById('phonenumber'); // phone inner
const emailinner = document.getElementById('emailinner'); // email inner
const accountownername=document.getElementById('accountownername'); //owner inner

const submitbutton = document.getElementById('submitbutton'); // submit button



// Data from local storage
const localfirstname = localStorage.getItem('first-name');
const locallastname = localStorage.getItem('last-name');
const localadress = localStorage.getItem('adress');
const localphone = localStorage.getItem('phone-out');
const localemail = localStorage.getItem('email-out');
const accountowner=localStorage.getItem('ownername');
const edibutton=document.getElementById('edibutton'); //edit button

// Modifying inner HTML
firstnamein.innerHTML = localfirstname;
lastnamein.innerHTML = locallastname;
adressinner.innerHTML = localadress;
phonenumber.innerHTML = localphone;
emailinner.innerHTML = localemail;
accountownername.innerHTML=accountowner;

// Event listener to clear local storage on button click
submitbutton.addEventListener('click', (e) => {
    localStorage.clear();
});
    