const slide= () => {
    const nav = document.querySelector(".nav-link-res");
    const burger = document.querySelector(".burger");

    burger.addEventListener("click" , () =>{    
            nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
    });
}

slide();

let aa = document.getElementById('logo');
console.log(aa.nodeType);
console.log(aa.nodeName);