const chooseClass = document.getElementById("choose-class");
const images = Array.from(document.getElementsByClassName("effect"));

window.addEventListener("scroll", () => {
        if( window.pageYOffset > chooseClass.offsetTop - 650){
           images.forEach(img => {
               img.style.opacity = 1;
           })
        }
});
