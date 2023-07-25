
var name = document.querySelector(".card-body h1");
var requests = document.querySelector(".connections");
var connect = document.querySelector(".connections1");

function change(){
    name.innerHTML = "abdallah naceur";
}
function refuse(id){
    var element = document.querySelector(id);
    element.remove();
    requests.innerHTML--;
}   
function accept(id){
    var element = document.querySelector(id);
    element.remove();
    requests.innerHTML--;
    connect.innerHTML++;
}