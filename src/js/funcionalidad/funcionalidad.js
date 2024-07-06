document.addEventListener("DOMContentLoaded", function() {
  var script = document.createElement('script');
  var modal = document.getElementById('openModal');

  function hideModal() {
      if (modal) {
          modal.style.display = 'none';
      } else {
          console.error("El modal no se encontró.");
      }
  }

  function Respuesta_SI() {
      let inicial_si = Math.round(Math.random() * 10);
      hideModal(); // Ocultar modal

      if (inicial_si == 1) {
        Swal.fire({
            title: "Adivina 0.0",
            text: "¿Cuando organizamos la boda 7u7?",
            imageUrl: "https://i.pinimg.com/originals/2a/46/54/2a465498f9b12467677c5cd3237eb576.jpg",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image"
        }).then(() => {
          // Redirigir cuando se cierre el modal de SweetAlert
          location.href = 'https://www.fridaenamorada.com/blog/25-pasos-para-comenzar-a-planear-tu-boda';
        });
      } else if (inicial_si == 2) {
          Swal.fire({
            title: "Oye...",
            text: "No te entendí, ¿dijiste si? 0.0",
            imageUrl: "https://i.pinimg.com/236x/1d/40/e3/1d40e33937439abbdb37e4546c8e281a.jpg",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image"
        }).then(() => {
          // Redirigir cuando se cierre el modal de SweetAlert
          location.href = 'https://www.fridaenamorada.com/blog/25-pasos-para-comenzar-a-planear-tu-boda';
        });
      } else if (inicial_si == 3) {
          Swal.fire({
            title: "¿Para cuando le hacemos abuelos a",
            text: "nuestros padres 7u7?",
            imageUrl: "https://i.pinimg.com/236x/45/c2/c2/45c2c23afd29ce869a5f6c589a59c7b5.jpg",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image"
        }).then(() => {
          // Redirigir cuando se cierre el modal de SweetAlert
          location.href = 'https://www.fridaenamorada.com/blog/25-pasos-para-comenzar-a-planear-tu-boda';
        });
      } else if (inicial_si == 4) {
          Swal.fire({
            title: "Pero...",
            text: "Primero un besito, ¿no? :3",
            imageUrl: "https://www.shutterstock.com/image-vector/illustration-naughty-flork-meme-shy-600w-2250780661.jpg",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image"
        }).then(() => {
          // Redirigir cuando se cierre el modal de SweetAlert
          location.href = 'https://www.fridaenamorada.com/blog/25-pasos-para-comenzar-a-planear-tu-boda';
        });
      } else if (inicial_si == 5) {
          Swal.fire({
            title: "Oye tu!",
            text: "¿Dónde esta mi anillo 0.0?",
            imageUrl: "https://i.pinimg.com/originals/e2/d3/e7/e2d3e7e0c0c3d64325d969bad782e581.png",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image"
        }).then(() => {
          // Redirigir cuando se cierre el modal de SweetAlert
          location.href = 'https://www.fridaenamorada.com/blog/25-pasos-para-comenzar-a-planear-tu-boda';
        });
      } else if (inicial_si == 6) {
          Swal.fire({
            title: "Saca tu mejor vestido que...",
            text: "Mañana nos casamos!!!!!",
            imageUrl: "https://www.shutterstock.com/image-vector/meme-flork-deformed-much-enthusiasm-260nw-2256621591.jpg",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image"
        }).then(() => {
          // Redirigir cuando se cierre el modal de SweetAlert
          location.href = 'https://www.fridaenamorada.com/blog/25-pasos-para-comenzar-a-planear-tu-boda';
        });
      } else if (inicial_si == 7) {
          Swal.fire({
            title: "Te atrapé!",
            text: "Osea que si quieres 7u7",
            imageUrl: "https://i.pinimg.com/236x/0c/71/1b/0c711ba400fe25d29b7da10c8e4d7c73.jpg",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image"
        }).then(() => {
          // Redirigir cuando se cierre el modal de SweetAlert
          location.href = 'https://www.fridaenamorada.com/blog/25-pasos-para-comenzar-a-planear-tu-boda';
        });
      } else if (inicial_si == 8) {
          Swal.fire({
            title: "Te",
            text: "Amo <3",
            imageUrl: "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fi0.wp.com%2Fimagenesparapeques.com%2Fwp-content%2Fuploads%2F2022%2F03%2FFlork-56.png%3Fw%3D3299%26ssl%3D1&sp=1720288698T9f2bedc83d282a76ccba5226546978ee99d8ae31b980abdc7ca39579c368cd79",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image"
        }).then(() => {
          // Redirigir cuando se cierre el modal de SweetAlert
          location.href = 'https://www.fridaenamorada.com/blog/25-pasos-para-comenzar-a-planear-tu-boda';
        });
      } else if (inicial_si == 9) {
        Swal.fire({
          title: "El siguiente paso...",
          text: "hacer un gusanito 7u7",
          imageUrl: "https://i.pinimg.com/originals/5c/40/52/5c4052baf3a0e4995062f619f750cd9e.png",
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: "Custom image"
      }).then(() => {
        // Redirigir cuando se cierre el modal de SweetAlert
        location.href = 'https://www.fridaenamorada.com/blog/25-pasos-para-comenzar-a-planear-tu-boda';
      });
      } else {
          Swal.fire({
            title: "¿Te casarias conmigo?...",
            imageUrl: "https://play-lh.googleusercontent.com/axeEZ4OG49IRk565QguyNkKLvhhKuSC4fdZMq5sOaHBZyEW822kHPJJHxxB1kJvOP4A",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image"
        }).then(()=>{
          Swal.fire({
            title: "Perdon soy olvidadizo",
            text: "Y no me acorde que dijiste que si",
            imageUrl: "https://i.pinimg.com/236x/37/09/e5/3709e56af27d84370833c820a351d9ed.jpg",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image"
          }).then(() =>{
            // Redirigir cuando se cierre el modal de SweetAlert
            location.href = 'https://www.fridaenamorada.com/blog/25-pasos-para-comenzar-a-planear-tu-boda';
          });
        });
      }
  }

  let chancito = 0;
  function Respuesta_NO() {
      chancito += 1;
      let inicial = Math.random() * 2000;
      if (chancito == 5) {
          alert('Oye, ya pusiste muchas veces "No", ¿no crees? ');
      } else if (chancito == 10) {
          alert('Mujer ya llevas 10 veces dandole al mismo boton :")');
      } else if (chancito == 20) {
          alert('Yo tengo todo el tiempo del mundo, tu no creo 0.0');
      } else if (chancito == 40) {
          alert('Enserio estas midiendo tu paciencia con una página web 7u7');
      } else if ((inicial > 0) && (inicial <= 400)) {
          alert('¿Escogiste no :") ?');
      } else if ((inicial > 400) && (inicial <= 800)) {
          alert('Me pone triste tu decisión :"(');
      } else if ((inicial > 800) && (inicial <= 1200)) {
          alert("Respuesta equivocada 0.0");
      } else if ((inicial > 1200) && (inicial <= 1600)) {
          alert("Creo que el mouse se te movio un poco a la derecha :3");
      } else {
          alert("¿Como que no? >:(");
      }
  }

  document.getElementById("boton_modal_si").onclick = Respuesta_SI;
  document.getElementById("boton_modal_no").onclick = Respuesta_NO;
});
