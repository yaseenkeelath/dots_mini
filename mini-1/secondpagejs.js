const namesignal=document.getElementById('namesignal');  //inner firstname
const nextbutton=document.getElementById('nextbutton'); //next button
const firstname=document.getElementById('firstname'); //first name input
const lastname=document.getElementById('lastname'); //lastname input
const lastnamesignal=document.getElementById('lastnamesignal'); //inner lastname
const adressinput=document.getElementById('adressinput'); //address inpput
const adressinner=document.getElementById('adressinner'); //address inner
const phonenumber=document.getElementById('phonenumber'); //phonenumber input
const phonenumberinner=document.getElementById('phonenumberinner'); //phonenumber inner html
const emailinput=document.getElementById('emailinput');//email input
const emialinner=document.getElementById('emialinner'); // email inner html

nextbutton.addEventListener('click',(e)=>{
    if(firstname.value===''||firstname.value===null){
        window.scrollTo(0,0);
        namesignal.innerHTML='please enter first name';
        namesignal.style.color='red';
        e.preventDefault();
    }else if(lastname.value===''||lastname.value===null){
        window.scrollTo(0,0);
        lastnamesignal.innerHTML='please enter first name';
        lastnamesignal.style.color='red';
        e.preventDefault();
    }else if(adressinput.value===''||adressinput.value===null){
        window.scrollTo(0,200);
        adressinner.innerHTML='street adress is compulsory';
        adressinner.style.color='red';
        e.preventDefault();
    
    }

    else if(phonenumber.value===''|| isNaN(phonenumber.value)){
        window.scrollTo(0,700);
        phonenumberinner.innerHTML='phone number is compulsory';
        phonenumberinner.style.color='red';
        e.preventDefault();
    }

    

    else if(phonenumber.value.length<10 || phonenumber.value.length>10){
        window.scrollTo(0,700);
        phonenumberinner.innerHTML='phone number should be 10 Digit';
        phonenumberinner.style.color='red';
        e.preventDefault();
    }

    else if(emailinput.value===''||emailinput.value===null){
        window.scrollTo(0,700);
        emialinner.innerHTML='email is compulsory';
        emialinner.style.color='red';
        e.preventDefault();
    }
    
    
    else if(!/\S+@\S+\.\S+/.test(emailinput.value)){
        window.scrollTo(0,700);
        emialinner.innerHTML='correct email format';
        emialinner.style.color='red';
        e.preventDefault();
    }
    

  //local storage items   
    else if(firstname.value){
        localStorage.setItem('first-name',firstname.value);
        localStorage.setItem('last-name',lastname.value);
        localStorage.setItem('adress',adressinput.value);
        localStorage.setItem('phone-out',phonenumber.value)
        localStorage.setItem('email-out',emailinput.value);
        window.location.href='printdetails.html';
        window.location.href='crud.html'
    }
});

//image upload
new tempusDominus.TempusDominus(document.getElementById("kt_td_picker_basic"), {
    //put your config here
});

