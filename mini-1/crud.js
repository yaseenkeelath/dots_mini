let data = [
    {id: 1, firstname: 'new', lastname: 'new2', address: 'newadd', email: 'yas@gmail.com', phonenumber: 9539969339, accountownername: 'onwer'},
    {id: 2, firstname: 'new', lastname: 'new2', address: 'newadd', email: 'yas@gmail.com', phonenumber: 9539969339, accountownername: 'onwer'},
    {id: 3, firstname: 'new', lastname: 'new2', address: 'newadd', email: 'yas@gmail.com', phonenumber: 9539969339, accountownername: 'onwer'}
];


function readall() {
    var tbdata = document.getElementById('table_data');
    var elements = '';

    // Retrieve data from local storage
    var firstName = localStorage.getItem('first-name');
    var lastName = localStorage.getItem('last-name');
    var address = localStorage.getItem('adress');
    var email = localStorage.getItem('email-out');
    var phoneNumber = localStorage.getItem('phone-out');


    if (true) {
        elements += `<tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${address}</td>
            <td>${email}</td>
            <td>${phoneNumber}</td>
            <td>Account Owner Name</td>
            <td>
                <button>Update</button>
                <button>Delete</button>
            </td>
        </tr>`;
    } 
    tbdata.innerHTML = elements;
}

document.addEventListener('DOMContentLoaded', readall);

const submitbutton=document.getElementById('submitbutton');

submitbutton.addEventListener('click',(e)=>{
    localStorage.clear();
    
})