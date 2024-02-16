function Respuesta_SI(){
  let inicial_si = Math.round(Math.random()*10);
  if((inicial_si==1)){
    alert('¿Cuando organizamos la boda 7u7?');
    console.log(location.href);
    location.href = 'https://www.fridaenamorada.com/blog/25-pasos-para-comenzar-a-planear-tu-boda';
  }else if((inicial_si==2)){
    alert('No te entendí, ¿dijiste si? 0.0');
    console.log(location.href);
    location.href = 'https://www.fridaenamorada.com/blog/25-pasos-para-comenzar-a-planear-tu-boda';
  }else if((inicial_si==3)){
    alert("¿Para cuando le hacemos abuelos a\nnuestros padres 7u7?");
    console.log(location.href);
    location.href = 'https://www.fridaenamorada.com/blog/25-pasos-para-comenzar-a-planear-tu-boda';
  }else if((inicial_si==4)){
    alert("Primero un besito :3");
    console.log(location.href);
    location.href = 'https://www.fridaenamorada.com/blog/25-pasos-para-comenzar-a-planear-tu-boda';
  }else if((inicial_si==5)){
    alert("¿Dónde esta mi anillo 0.0?");
    console.log(location.href);
    location.href = 'https://www.fridaenamorada.com/blog/25-pasos-para-comenzar-a-planear-tu-boda';
  }else if((inicial_si==6)){
    alert("Saca tu mejor vestido que\nMañana nos casamos!!!!!");
    console.log(location.href);
    location.href = 'https://www.fridaenamorada.com/blog/25-pasos-para-comenzar-a-planear-tu-boda';
  }else if((inicial_si==7)){
    alert("Osea que si quieres 7u7");
    console.log(location.href);
    location.href = 'https://www.fridaenamorada.com/blog/25-pasos-para-comenzar-a-planear-tu-boda';
  }else if((inicial_si==8)){
    alert("Te amo <3");
    console.log(location.href);
    location.href = 'https://www.fridaenamorada.com/blog/25-pasos-para-comenzar-a-planear-tu-boda';
  }else if((inicial_si==9)){
    console.log(location.href);
    location.href = 'https://www.fridaenamorada.com/blog/25-pasos-para-comenzar-a-planear-tu-boda';
  }else{
    alert("¿Te casarias conmigo?...\nPerdon soy olvidadizo y no me acorde que dijiste que si");
    console.log(location.href);
    location.href = 'https://www.fridaenamorada.com/blog/25-pasos-para-comenzar-a-planear-tu-boda';
  }
}

let chancito = 0;
function Respuesta_NO() {
  chancito+=1;
  let inicial = Math.random()*2000;
  if(chancito==5){
    alert('Oye, ya pusiste muchas veces "No", ¿no crees? ');
  }else if(chancito==10){
    alert ('Mujer ya llevas 10 veces dandole al mismo boton :")');
  }else if(chancito==20){
    alert('Yo tengo todo el tiempo del mundo, tu no creo 0.0');
  }else if(chancito==40){
    alert('Enserio estas midiendo tu paciencia con una página web 7u7');
  }else if((inicial>0) && (inicial<=400)){
    alert('¿Escogiste no :") ?');
  }else if((inicial>400) && (inicial<=800)){
    alert('Me pone triste tu decisión :"(');
  }else if((inicial>800) && (inicial<=1200)){
    alert("Respuesta equivocada 0.0");
  }else if((inicial>1200) && (inicial<=1600)){
    alert("Creo que el mouse se te movio un poco a la derecha :3");
  }else{
    alert("¿Como que no? >:(");
  }
}
