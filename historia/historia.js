
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
        const imgIzq = document.querySelectorAll('.imagenIzq');
      
        imgIzq.forEach((img) => {
          const rect = img.getBoundingClientRect();
      
          if (rect.top < window.innerHeight - 100 && rect.bottom > 0) {
            img.classList.add("animacionTarjeta1");
          }
        });
      });

      window.addEventListener('scroll', () => {
        let imgDer = document.querySelector('.imagenDer');
        let rectDer = imgDer.getBoundingClientRect();
        if (rectDer.top <= window.innerHeight - 200 && rectDer.bottom > 0) {
          imgDer.classList.add('animacionTarjeta2');
        }
      });

      window.addEventListener('scroll', () => {
        const textoDer = document.querySelectorAll('.textoTarjeta1');
      
        textoDer.forEach((p) => {
          const rect = p.getBoundingClientRect();
      
          if (rect.top < window.innerHeight - 100 && rect.bottom > 0) {
            p.classList.add("animacionTextoTarjeta1");
          }
        });
      });

      window.addEventListener('scroll', () => {
        let textoIzq = document.querySelector('.textoTarjeta2');
        let rect= textoIzq.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 200 && rect.bottom > 0) {
          textoIzq.classList.add('animacionTextoTarjeta2');
        }
      });


  let video=document.querySelector('video');
  let botonPlay = document.getElementById("botonPlay");
  let botonPausa= document.getElementById("botonPause");
  let timeProgression;

  setTimeout(()=>{
  
  document.getElementById('showTime').innerHTML=` Duracion video  04:41`},100);
  botonPlay.addEventListener('click',()=>{
    video.play()
    tiempo=setInterval(()=>{
    document.getElementById('tiempoTranscurrido').innerHTML=`${transformarTiempoActual(video.currentTime)}`
    },1000)
    });

    botonPausa.addEventListener('click',()=>{
      video.pause();
      flag=false;
      clearInterval(timeProgression)
  });


  let transformarTiempoActual=(tiempo)=>{
    if(tiempo<60){
        if(tiempo.toFixed(0)<10){
            return `00:0${tiempo.toFixed(0)}`
        }
        return `00:${tiempo.toFixed(0)}`
    }else{
        console.log(tiempo/60 )
        let minutos=parseInt(tiempo/60)
        let segundos= (tiempo/60 - minutos)*60
        if(segundos<10){
            return `${minutos}:0${segundos.toFixed(0)}`
        }
        return `${minutos}:${segundos.toFixed(0)}`
    }
}
