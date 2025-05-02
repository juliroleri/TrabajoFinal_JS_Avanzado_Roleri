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


// -------------------------

document.addEventListener('DOMContentLoaded', () => {
  const seccion = document.getElementById("rompecabezas");
  const botonReinicio = document.getElementById("reiniciar");

  if (seccion) {
    seccion.dataset.originalHtml = seccion.innerHTML;
  }

  function inicializarEventos() {
    const imagenes = document.querySelectorAll('.imagenes');
    const cajas = document.querySelectorAll('.caja');

    imagenes.forEach(img => {
      img.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.id);
      });
    });

    cajas.forEach(caja => {
      caja.addEventListener('dragover', (e) => {
        e.preventDefault();
      });

      caja.addEventListener('drop', (e) => {
        e.preventDefault();
        const idImagen = e.dataTransfer.getData('text/plain');
        const imagen = document.getElementById(idImagen);

        if (!caja.querySelector('img')) {
          caja.innerHTML = '';
          caja.appendChild(imagen);
          imagen.style.display = 'block';
          verificarCajas();
        }
      });
    });
  }


  function verificarCajas() {
    const cajas = document.querySelectorAll('.caja');
    const llenas = Array.from(cajas).filter(caja => caja.querySelector('img'));


    if (llenas.length === 3) {
      botonReinicio.style.display = 'block';
      cajas.forEach(caja => {
        caja.classList.add('animacionCaja');
      });
    }
  }


  botonReinicio.addEventListener("click", () => {
    if (!seccion || !seccion.dataset.originalHtml) return;

    seccion.innerHTML = seccion.dataset.originalHtml;


    inicializarEventos();


    botonReinicio.style.display = 'none';
  });

  inicializarEventos();
});

