$(window).scroll(function(){
    $('nav').toggleClass('scrolled',$(this).scrollTop()>30);
})

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

