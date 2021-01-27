const slide= () => {
    const nav = document.querySelector(".nav-link-res");
    const burger = document.querySelector(".burger");

    burger.addEventListener("click" , () =>{    
            nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
    });
}

slide();

let pallete = ["green","brown","blue","purple", "pink" , "#2196F3"];

let btn = document.querySelector(".btn");
let span = document.querySelector(".color");

btn.addEventListener("click" , function(){ 
    let random = Math.floor(Math.random() * pallete.length);
    let randomres = pallete[random];
    document.body.style.backgroundColor = randomres;
    span.textContent = randomres;   
});

