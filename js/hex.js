const slide= () => {
    const nav = document.querySelector(".nav-link-res");
    const burger = document.querySelector(".burger");

    burger.addEventListener("click" , () =>{    
            nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
    });
}

slide();


let data = [0,1 , 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let btn = document.querySelector(".btn");
let color = document.querySelector(".color");

function random() {
    return Math.floor(Math.random() * data.length);
}

btn.addEventListener("click", function(){
  let hex = "#";
for (let i = 0; i < 6; i++) {
    hex += data[random()];
}
console.log(hex);
document.body.style.backgroundColor = hex;
color.textContent = hex;

});








