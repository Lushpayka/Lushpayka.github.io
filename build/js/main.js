let acc = document.getElementsByClassName("accordion");
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    for (let j = 0; j < acc.length; j++){
        if(acc[j] != this){
          acc[j].classList.remove("active");
          acc[j].nextElementSibling.style.maxHeight = null;
      }
    }
    let panel = this.nextElementSibling; 
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;

    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
};

    
let hamburger = document.querySelector('.menu__btn');
let body = document.querySelector("body");
hamburger.addEventListener('click', function(){
  body.classList.toggle("lock");
});