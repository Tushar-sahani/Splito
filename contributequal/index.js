$(window).scroll(function(){
    $('nav').toggleClass('scrolled',$(this).scrollTop()>30);
})

// const searchButton = document.getElementById('search-button');
// const searchInput = document.getElementById('search-input');
// searchButton.addEventListener('click', () => {
//   const inputValue = searchInput.value;
//   alert(inputValue);
// });



