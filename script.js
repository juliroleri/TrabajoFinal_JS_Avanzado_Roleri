
window.addEventListener("scroll", cambioNav);

  function cambioNav(){
    let nav = document.querySelector("nav");
    let anclas=document.getElementsByClassName("linkNav")
   
    if (window.scrollY > 50) {
      nav.style.backgroundColor = "white";
      for (let i = 0; i < anclas.length; i++) {
        anclas[i].classList.add("linkNav2");
      }

    }
    else {
        nav.style.backgroundColor = "transparent";
        for (let i = 0; i < anclas.length; i++) {
            anclas[i].classList.remove("linkNav2");
      }
    }
}

    window.addEventListener("load", () => {
        const parte1 = document.getElementsByClassName("mon1");
        for (let i = 0; i < parte1.length; i++) {
          parte1[i].classList.add("loaded1");
        }
      
        const parte2 = document.getElementsByClassName("mon2");
        for (let i = 0; i < parte2.length; i++) {
          parte2[i].classList.add("loaded2");
        }
      });


      window.addEventListener('scroll', () => {
        let animacion1 = document.querySelector('.animacion');
        let animacion2 = document.querySelector('.animacion2');
      
        let rect1 = animacion1.getBoundingClientRect();
        let rect2 = animacion2.getBoundingClientRect();
      
        if (rect1.top <= window.innerHeight && rect1.bottom >= 0) {
          animacion1.classList.add('visible');
        }
      
        if (rect2.top <= window.innerHeight && rect2.bottom >= 0) {
          animacion2.classList.add('visible');
        }
      });

      