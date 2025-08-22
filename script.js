// script.js

document.addEventListener('DOMContentLoaded', function() {
 
  // 1. Música de fondo
  const audio = new Audio('Perfect.mp3'); // Reemplaza con tu archivo de música
  audio.loop = true;
  let musicaReproduciendo = false;

  // Botones de música
  const btnConMusica = document.getElementById('play-music-modal');
  const btnSinMusica = document.querySelector('[data-dismiss="modal"]');

  // 2. Welcome Screen
  const modalMusica = document.getElementById('modalMusica');

  btnConMusica.addEventListener('click', function(e) {
    e.preventDefault();
    audio.play()
      .then(() => {
        musicaReproduciendo = true;
        sessionStorage.setItem('musica', 'true');
        cerrarModal();
      })
      .catch(error => {
        console.error("Error al reproducir música:", error);
        cerrarModal();
      });
  });

  btnSinMusica.addEventListener('click', function(e) {
    e.preventDefault();
    musicaReproduciendo = false;
    sessionStorage.setItem('musica', 'false');
    cerrarModal();
  });

  function cerrarModal() {
    modalMusica.style.display = 'none';
    document.body.classList.remove('modal-open');
    // Mostrar la portada después de cerrar el modal
    document.querySelector('.portada-container').style.display = 'flex';
    
    // Iniciar animaciones después de que el modal se cierre
    iniciarAnimaciones();
  }

  // Verificar si ya se eligió preferencia de música
  if(sessionStorage.getItem('musica') === 'true') {
    modalMusica.style.display = 'none';
    audio.play();
    musicaReproduciendo = true;
    document.querySelector('.portada-container').style.display = 'flex';
    iniciarAnimaciones();
  } else if(sessionStorage.getItem('musica') === 'false') {
    modalMusica.style.display = 'none';
    document.querySelector('.portada-container').style.display = 'flex';
    iniciarAnimaciones();
  }

  // 3. Cuenta regresiva
  function actualizarCuentaRegresiva() {
    const fechaEvento = new Date('2025-08-15T18:00:00'); // Ajusta la fecha de tu evento
    const ahora = new Date();
    const diferencia = fechaEvento - ahora;

    const relojElement = document.getElementById('boxCirculo');

    if (diferencia <= 0) {
      const diasPasados = Math.floor(Math.abs(diferencia) / (1000 * 60 * 60 * 24));
      if (diasPasados === 0) {
      // Hoy es el día del evento
      relojElement.innerHTML = '<div class="d-flex justify-content-center align-items-center"><div class="corazon-falta"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 32" width="38" height="32" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px);"><defs><clipPath id="__lottie_element_36"><rect width="38" height="32" x="0" y="0"></rect></clipPath></defs><g clip-path="url(#__lottie_element_36)"><g transform="matrix(0.7499992251396179,0,0,0.7499992251396179,4.768014907836914,3.9505128860473633)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,18.97599983215332,16.06599998474121)"><path fill="rgb(180,143,115)" fill-opacity="1" d=" M-1.1369999647140503,15.593999862670898 C-0.7720000147819519,15.741999626159668 -0.38600000739097595,15.815999984741211 0.0010000000474974513,15.815999984741211 C0.3869999945163727,15.815999984741211 0.7730000019073486,15.741999626159668 1.1369999647140503,15.593999862670898 C1.8550000190734863,15.300999641418457 18.725000381469727,8.284000396728516 18.725000381469727,-4.073999881744385 C18.725000381469727,-10.550000190734863 13.385000228881836,-15.815999984741211 6.820000171661377,-15.815999984741211 C4.349999904632568,-15.815999984741211 1.9789999723434448,-15.067000389099121 0.0010000000474974513,-13.70199966430664 C-1.9780000448226929,-15.067000389099121 -4.348999977111816,-15.815999984741211 -6.817999839782715,-15.815999984741211 C-13.383999824523926,-15.815999984741211 -18.725000381469727,-10.550000190734863 -18.725000381469727,-4.073999881744385 C-18.725000381469727,8.284000396728516 -1.8550000190734863,15.300999641418457 -1.1369999647140503,15.593999862670898z"></path></g></g></g></svg></div></div><span class="falta"><span class="day">¡Hoy es el día!</span></span>';
      } else if (diasPasados === 1) {
      // El evento fue ayer
      relojElement.innerHTML = '<div class="d-flex justify-content-center align-items-center"><div class="corazon-falta"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 32" width="38" height="32" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px);"><defs><clipPath id="__lottie_element_36"><rect width="38" height="32" x="0" y="0"></rect></clipPath></defs><g clip-path="url(#__lottie_element_36)"><g transform="matrix(0.7499992251396179,0,0,0.7499992251396179,4.768014907836914,3.9505128860473633)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,18.97599983215332,16.06599998474121)"><path fill="rgb(180,143,115)" fill-opacity="1" d=" M-1.1369999647140503,15.593999862670898 C-0.7720000147819519,15.741999626159668 -0.38600000739097595,15.815999984741211 0.0010000000474974513,15.815999984741211 C0.3869999945163727,15.815999984741211 0.7730000019073486,15.741999626159668 1.1369999647140503,15.593999862670898 C1.8550000190734863,15.300999641418457 18.725000381469727,8.284000396728516 18.725000381469727,-4.073999881744385 C18.725000381469727,-10.550000190734863 13.385000228881836,-15.815999984741211 6.820000171661377,-15.815999984741211 C4.349999904632568,-15.815999984741211 1.9789999723434448,-15.067000389099121 0.0010000000474974513,-13.70199966430664 C-1.9780000448226929,-15.067000389099121 -4.348999977111816,-15.815999984741211 -6.817999839782715,-15.815999984741211 C-13.383999824523926,-15.815999984741211 -18.725000381469727,-10.550000190734863 -18.725000381469727,-4.073999881744385 C-18.725000381469727,8.284000396728516 -1.8550000190734863,15.300999641418457 -1.1369999647140503,15.593999862670898z"></path></g></g></g></svg></div></div><span class="falta"><span class="day">El evento fue ayer</span></span>';
      } else {
      // El evento ya pasó hace varios días
      relojElement.innerHTML = `<div class="d-flex justify-content-center align-items-center"><div class="corazon-falta"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 32" width="38" height="32" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px);"><defs><clipPath id="__lottie_element_36"><rect width="38" height="32" x="0" y="0"></rect></clipPath></defs><g clip-path="url(#__lottie_element_36)"><g transform="matrix(0.7499992251396179,0,0,0.7499992251396179,4.768014907836914,3.9505128860473633)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,18.97599983215332,16.06599998474121)"><path fill="rgb(180,143,115)" fill-opacity="1" d=" M-1.1369999647140503,15.593999862670898 C-0.7720000147819519,15.741999626159668 -0.38600000739097595,15.815999984741211 0.0010000000474974513,15.815999984741211 C0.3869999945163727,15.815999984741211 0.7730000019073486,15.741999626159668 1.1369999647140503,15.593999862670898 C1.8550000190734863,15.300999641418457 18.725000381469727,8.284000396728516 18.725000381469727,-4.073999881744385 C18.725000381469727,-10.550000190734863 13.385000228881836,-15.815999984741211 6.820000171661377,-15.815999984741211 C4.349999904632568,-15.815999984741211 1.9789999723434448,-15.067000389099121 0.0010000000474974513,-13.70199966430664 C-1.9780000448226929,-15.067000389099121 -4.348999977111816,-15.815999984741211 -6.817999839782715,-15.815999984741211 C-13.383999824523926,-15.815999984741211 -18.725000381469727,-10.550000190734863 -18.725000381469727,-4.073999881744385 C-18.725000381469727,8.284000396728516 -1.8550000190734863,15.300999641418457 -1.1369999647140503,15.593999862670898z"></path></g></g></g></svg></div></div><span class="falta"><span class="day">El evento fue hace ${diasPasados} días</span></span>`;
      }
      return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById('dias').querySelector('.number').textContent = dias.toString().padStart(2, '0');
    document.getElementById('horas').querySelector('.number').textContent = horas.toString().padStart(2, '0');
    document.getElementById('minutos').querySelector('.number').textContent = minutos.toString().padStart(2, '0');
    document.getElementById('segundos').querySelector('.number').textContent = segundos.toString().padStart(2, '0');
  }

  // Actualizar cada segundo
  setInterval(actualizarCuentaRegresiva, 1000);
  actualizarCuentaRegresiva(); // Llamada inicial

  // 4. Animaciones con Intersection Observer
  function iniciarAnimaciones() {
    // Configuración básica de animaciones
    const animarElementos = (elementos, claseAnimacion) => {
      elementos.forEach(elemento => {
        elemento.classList.add(claseAnimacion);
      });
    };

    // Animaciones al cargar
    setTimeout(() => {
      const adornos = document.querySelectorAll('.adorno');
      animarElementos(adornos, 'aparecer');
      
      const titulos = document.querySelectorAll('h1, h3');
      animarElementos(titulos, 'aparecer-desde-arriba');
      
      const contenido = document.querySelectorAll('.content-portada > *');
      animarElementos(contenido, 'aparecer-escalado');
    }, 500);

    // Animaciones al hacer scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animar-entrada');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    document.querySelectorAll('.info-box, .anim-anillos, .box-frase-portada').forEach(el => {
      observer.observe(el);
    });
  }

  // 5. Botones interactivos
  document.querySelectorAll('.boton').forEach(boton => {
    boton.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)';
      this.style.boxShadow = '0px 0px 15px 0px rgba(0,0,0,0.3)';
    });
    
    boton.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
      this.style.boxShadow = '0px 0px 5px -1px rgba(0,0,0,0.4)';
    });
    
    boton.addEventListener('mousedown', function() {
      this.style.transform = 'scale(0.95)';
    });
    
    boton.addEventListener('mouseup', function() {
      this.style.transform = 'scale(1.05)';
    });
  });

  // 6. Confirmar asistencia - Modal y envío de formulario
  document.querySelectorAll('.confirmar-asistencia').forEach(boton => {
    boton.addEventListener('click', function(e) {
      e.preventDefault();
      const modal = document.getElementById('modalAsistencia');
      const modalBody = document.querySelector('#modalAsistencia .modal-body');
      const formContent = modalBody.querySelector('.formulario-content');
      const msjContent = modalBody.querySelector('.msj-content');
      
      // Configurar el modal según el evento
      const titulo = modal.querySelector('.modal-title');
      titulo.textContent = `Mensaje para asistentes`;

      formContent.style.display = 'none';
      msjContent.style.display = 'flex';

      msjContent.innerHTML = `
        <p class="text-center">¡Gracias por asistir!</p>
        <p class="text-center">Nos alegra mucho que nos acompañes en este día tan especial.</p>
        <div class="anim-corazon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 32" width="38" height="32" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px);"><defs><clipPath id="__lottie_element_36"><rect width="38" height="32" x="0" y="0"></rect></clipPath></defs><g clip-path="url(#__lottie_element_36)"><g transform="matrix(0.7499992251396179,0,0,0.7499992251396179,4.768014907836914,3.9505128860473633)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,18.97599983215332,16.06599998474121)"><path fill="rgb(180,143,115)" fill-opacity="1" d=" M-1.1369999647140503,15.593999862670898 C-0.7720000147819519,15.741999626159668 -0.38600000739097595,15.815999984741211 0.0010000000474974513,15.815999984741211 C0.3869999945163727,15.815999984741211 0.7730000019073486,15.741999626159668 1.1369999647140503,15.593999862670898 C1.8550000190734863,15.300999641418457 18.725000381469727,8.284000396728516 18.725000381469727,-4.073999881744385 C18.725000381469727,-10.550000190734863 13.385000228881836,-15.815999984741211 6.820000171661377,-15.815999984741211 C4.349999904632568,-15.815999984741211 1.9789999723434448,-15.067000389099121 0.0010000000474974513,-13.70199966430664 C-1.9780000448226929,-15.067000389099121 -4.348999977111816,-15.815999984741211 -6.817999839782715,-15.815999984741211 C-13.383999824523926,-15.815999984741211 -18.725000381469727,-10.550000190734863 -18.725000381469727,-4.073999881744385 C-18.725000381469727,8.284000396728516 -1.8550000190734863,15.300999641418457 -1.1369999647140503,15.593999862670898z"></path></g></g></g></svg></div>
      `;
      
      // Mostrar el modal
      modal.style.display = 'block';
      document.body.classList.add('modal-open');

      // Cerrar el modal después de 3 segundos
      setTimeout(() => {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
      }, 5000);

    });
  });

  // Cerrar modal con el botón X
  document.querySelector('#modalAsistencia .close').addEventListener('click', function() {
    const modal = document.getElementById('modalAsistencia');
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
  });
  
  // 7. Cómo llegar
  document.querySelectorAll('.modal-como-llegar').forEach(boton => {
    boton.addEventListener('click', function(e) {
      e.preventDefault();
      const evento = this.getAttribute('data-evento');
      // Aquí puedes implementar un modal con mapa o abrir Google Maps
      window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Cra. 38b, 65B-38, Barranquilla, Atlántico, CO')}`);
    });
  });

  // 8. Agendar evento en Google Calendar
  document.querySelectorAll('#addeventatc').forEach(boton => {
    boton.addEventListener('click', function(e) {
      if (this.id !== 'addeventatc' && !this.classList.contains('confirmar-asistencia')) return;
      e.preventDefault();
      
      const fechaEvento = '20250815T180000'; // Formato: YYYYMMDDTHHMMSS
      const fechaFinEvento = '20250815T190000';
      const titulo = encodeURIComponent('Boda de Mónica y Jorge');
      const detalles = encodeURIComponent('Ceremonia de matrimonio\nParroquia San Juan María Vianney\nCra. 38b, 65B-38, Barranquilla, Atlántico');
      const ubicacion = encodeURIComponent('Parroquia San Juan María Vianney, Cra. 38b, 65B-38, Barranquilla, Atlántico');
      
      const urlGoogleCalendar = `https://www.google.com/calendar/render?action=TEMPLATE&dates=${fechaEvento}/${fechaFinEvento}&text=${titulo}&details=${detalles}&location=${ubicacion}`;
      
      window.open(urlGoogleCalendar, '_blank');
    });
  });

  // 9. Efecto parallax mejorado para móviles
  function setupParallax() {
    const parallaxImg = document.querySelector('.parallax-slider');
    
    if (window.innerWidth > 767) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            // Movemos hacia arriba con un factor de 0.5 (ajusta este valor)
            parallaxImg.style.transform = `translate3d(-14px, ${-scrollPosition * 0.5}px, 0px)`;
        });
    } else {
        parallaxImg.style.transform = 'none';
    }
  }
 
  // 10. Funcionalidad para los enlaces del footer
  document.querySelectorAll('.footer a').forEach(enlace => {
    enlace.addEventListener('click', function(e) {
      e.preventDefault();
      const accion = this.getAttribute('data-evento');
      
      // Cerrar cualquier modal abierto primero
      document.querySelectorAll('.modal').forEach(modal => {
        modal.style.display = 'none';
      });
      document.body.classList.remove('modal-open');
      
      switch(accion) {
        case 'confirmar-asistencia':
          // Abrir modal de confirmación de asistencia
          const modal = document.getElementById('modalAsistencia');
          const titulo = modal.querySelector('.modal-title');
          titulo.textContent = 'Mensaje para asistentes';
          
          // Configurar el icono
          const icono = modal.querySelector('.white-circle-icon img');
          icono.src = 'img_circuloCeremonia.svg';
          
          // Mostrar el modal
          modal.style.display = 'block';
          document.body.classList.add('modal-open');
          break;
          
        case 'agendar-ceremonia':
          // Agendar en Google Calendar
          const fechaEvento = '20250815T180000';
          const fechaFinEvento = '20250815T190000';
          const tituloEvento = encodeURIComponent('Boda de Mónica y Jorge - Ceremonia');
          const detalles = encodeURIComponent('Ceremonia de matrimonio\nParroquia San Juan María Vianney\nCra. 38b, 65B-38, Barranquilla, Atlántico');
          const ubicacion = encodeURIComponent('Parroquia San Juan María Vianney, Cra. 38b, 65B-38, Barranquilla, Atlántico');
          
          const urlGoogleCalendar = `https://www.google.com/calendar/render?action=TEMPLATE&dates=${fechaEvento}/${fechaFinEvento}&text=${tituloEvento}&details=${detalles}&location=${ubicacion}`;
          window.open(urlGoogleCalendar, '_blank');
          break;
          
        case 'como-llegar':
          // Abrir mapa con la ubicación
          window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Parroquia San Juan María Vianney, Cra. 38b, 65B-38, Barranquilla, Atlántico, CO')}`, '_blank');
          break;
      }
    });
  });

  setupParallax();
  window.addEventListener('resize', setupParallax);

  // Configuración del carrusel
  const carrusel = document.querySelector('.carrusel');
  const slides = document.querySelectorAll('.slick-slide:not(.slick-cloned)');
  const dots = document.querySelectorAll('.slick-dots li');
  let currentIndex = 0;
  let slideWidth = 500; // Ancho inicial para desktop
  let isDragging = false;
  let startPos = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;
  let animationID;
  
  // Ajustar para móviles
  function handleResize() {
    if (window.innerWidth <= 768) {
      slideWidth = window.innerWidth * 0.9; // 90% del ancho de pantalla en móviles
    } else {
      slideWidth = 500; // Ancho fijo para desktop
    }
    
    // Actualizar el ancho de todos los slides
    document.querySelectorAll('.slick-slide').forEach(slide => {
      slide.style.width = `${slideWidth}px`;
    });
    
    // Reposicionar el carrusel
    setPositionByIndex();
  }
  
  // Configurar eventos táctiles y de ratón
  slides.forEach((slide, index) => {
    // Eventos táctiles
    slide.addEventListener('touchstart', touchStart(index));
    slide.addEventListener('touchend', touchEnd);
    slide.addEventListener('touchmove', touchMove);
    
    // Eventos de ratón
    slide.addEventListener('mousedown', touchStart(index));
    slide.addEventListener('mouseup', touchEnd);
    slide.addEventListener('mouseleave', touchEnd);
    slide.addEventListener('mousemove', touchMove);
  });
  
  // Configurar dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      goToSlide(index);
    });
  });
  
  // Funciones para el desplazamiento táctil/ratón
  function touchStart(index) {
    return function(event) {
      currentIndex = index;
      startPos = getPositionX(event);
      isDragging = true;
      animationID = requestAnimationFrame(animation);
      carrusel.classList.add('grabbing');
    }
  }
  
  function touchEnd() {
    isDragging = false;
    cancelAnimationFrame(animationID);
    carrusel.classList.remove('grabbing');
    
    const movedBy = currentTranslate - prevTranslate;
    
    if (movedBy < -100 && currentIndex < slides.length - 1) {
      currentIndex += 1;
    }
    
    if (movedBy > 100 && currentIndex > 0) {
      currentIndex -= 1;
    }
    
    setPositionByIndex();
  }
  
  function touchMove(event) {
    if (isDragging) {
      const currentPosition = getPositionX(event);
      currentTranslate = prevTranslate + currentPosition - startPos;
    }
  }
  
  function animation() {
    setSliderPosition();
    if (isDragging) requestAnimationFrame(animation);
  }
  
  function setSliderPosition() {
    const track = document.querySelector('.slick-track');
    track.style.transform = `translate3d(${currentTranslate}px, 0, 0)`;
  }
  
  function setPositionByIndex() {
    currentTranslate = currentIndex * -slideWidth;
    prevTranslate = currentTranslate;
    setSliderPosition();
    updateDots();
  }
  
  function goToSlide(index) {
    currentIndex = index;
    setPositionByIndex();
  }
  
  function updateDots() {
    dots.forEach((dot, index) => {
      dot.classList.toggle('slick-active', index === currentIndex);
      dot.querySelector('button').setAttribute('aria-selected', index === currentIndex);
    });
  }
  
  function getPositionX(event) {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
  }
  
  // Inicializar y configurar eventos
  handleResize();
  window.addEventListener('resize', handleResize);
  
  
  setInterval(() => {
    if (!isDragging) {
      currentIndex = (currentIndex + 1) % slides.length;
      setPositionByIndex();
    }
  }, 5000);
});
