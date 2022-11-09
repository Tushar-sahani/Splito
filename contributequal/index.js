// const searchButton = document.getElementById('search-button');
// const searchInput = document.getElementById('search-input');
// searchButton.addEventListener('click', () => {
//   const inputValue = searchInput.value;
//   alert(inputValue);
// });

// random number for key
const key = document.getElementById('key');
let a = 6;
let random = Math.floor(Math.random() * (10**a));
key.innerHTML = random;

const stickytop = document.getElementsByClassName('navbar');
stickytop.addEventListener("scroll",()=>{
    stickytop.classList.add("stickeytop");
})
// function myFunction(){
//     const navbar = document.getElementsByClassName("navbar");
//     navbar.addEventListener("scroll", myScript);
// }
// function myScript(){
//     navbar.classList.add("stickytop");
// }