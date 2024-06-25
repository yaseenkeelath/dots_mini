const institutioninput=document.getElementById('institutioninput'); //institue input
const instituesignal=document.getElementById('instituesignal'); //institute inner html
const imageinput=document.getElementById('upload_image_background'); // image input
const imagesignal=document.getElementById('imagesignal'); //image inner html
const ownername=document.getElementById('ownername'); //input owner name

const bankbutton=document.getElementById('bankbutton'); //next button




bankbutton.addEventListener('click',(e)=>{
    if(institutioninput.value===''||institutioninput.value===null){
        window.scrollTo(0,0);
        instituesignal.innerHTML='please enter institute name';
        e.preventDefault();
    }else if(imageinput.value===''||imageinput.value===null){
        window.scrollTo(0,400);
        imagesignal.innerHTML='please upload tax form';
        imagesignal.style.color='red';
        e.preventDefault();
    }else if(ownername.value){
        localStorage.setItem('ownername',ownername.value);
        window.location.href='printdetails.html';
    }
})

