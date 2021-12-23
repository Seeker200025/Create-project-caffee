let navbar = document.querySelector('.navbar');
// let addCart = document.querySelector(".btn");

// addCart.onclick = () =>{
//     let x = [];
//     let i = document.querySelector('#menu-btn').push(x)
//     console.log(i)  
// }



document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}
// const elements = {
//     navbar: document.querySelector('.navbar'),
//     menu: document.querySelector('#menu-btn'),
//     cart: document.querySelector('#cart-btn'),
//     menuCart: document.querySelector('.cart-items-container'),
//     searchbtn: document.querySelector('#search-btn'),
//     searchForm: document.querySelector('.search-form')

// }

// /*Activation de la barre de menu*/

// elements.menu.addEventListener("click", function(){
//    elements.navbar.classList.toggle('active');
//    elements.navbar.classList.remove('active');
// });

// /*Fin de la mise en place de la barre de menu*/


// elements.cart.addEventListener("click", function(){
//     elements.menuCart.classList.toggle('active');
//     elements.menuCart.classList.remove('active');
   
// })

// elements.searchbtn.addEventListener('click', function(){
//     elements.searchForm.classList.toggle('active');
//     elements.searchForm.classList.remove('active');
  
// })

   

// window.addEventListener("scroll", function(e){
//     elements.navbar.classList.remove('active');
//     elements.menuCart.classList.remove('active');
//     elements.searchForm.classList.remove('active');
// })











