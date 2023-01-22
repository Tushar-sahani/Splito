function signin(){
    document.querySelector(".overlay").classList.toggle("showoverlay");
    document.querySelector(".container1").classList.toggle("showform");
    document.querySelector("body").classList.toggle("scroll");
}
function closeform(){
    document.querySelector(".container1").classList.remove("showform");
    document.querySelector(".overlay").classList.remove("showoverlay");
    document.querySelector("body").classList.remove("scroll");
}

const forms = document.querySelector(".forms"),
      pwShowHide = document.querySelectorAll(".eye-icon"),
      links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
        
        pwFields.forEach(password => {
            if(password.type === "password"){
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })
        
    })
})      

links.forEach(link => {
    link.addEventListener("click", e => {
       e.preventDefault();
       forms.classList.toggle("show-signup");
    })
})

let newpage = document.getElementById("newpage");
newpage.addEventListener('click',()=>{
    window.open('../Dashboard/dashboard.html','_self');
})
