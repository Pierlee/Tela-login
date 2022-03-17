import userApi from '../api/user.js';
var user = document.getElementById('user');

console.log("HELLO WORLD!");
window.entrar = function(){
    event.preventDefault();
    var usuario = document.getElementById('user').value;
    var searchUser = buscarUser(usuario); 
    var senha = document.getElementById('senha').value;

    console.log(searchUser);
}

function searchUser(usuario){ /// 
    var aux = false; //Variaveis boleanas 
    var user = null;
    var i=0; 
    userApi.forEach(element => {
        i++; /// i = i + 1;
        if(element.username === usuario){
            aux = true;
            user = element;
            return;
        }
    });
    return{aux,user,i};
}

function validarSenha(usuario){

}