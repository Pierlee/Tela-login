import userApi from '../api/user.js';
var user = document.getElementById('user');


function entrar(){
    
}

//arrow Funcion
function use(){
    userApi.forEach((item)=>{
        var p = document.createElement("p");
        user.appendChild(p);
        
    })
}
use();