
let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let Password = document.querySelector("#password");

let containerPassoword = document.querySelector("#conntainer-password")

let charset ="abcdefghijklmnopkrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*";
let novasenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePassword.innerHTML =this.value;
}