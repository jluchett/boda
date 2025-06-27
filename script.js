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
    const fechaEvento = new Date('2025-08-15T17:00:00'); // Ajusta la fecha de tu evento
    const ahora = new Date();
    const diferencia = fechaEvento - ahora;

    if (diferencia <= 0) {
      document.getElementById('reloj').innerHTML = '<div class="reloj-col"><span class="number">¡Hoy es el día!</span></div>';
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

  // 6. Confirmar asistencia
  document.querySelectorAll('.confirmar-asistencia').forEach(boton => {
    boton.addEventListener('click', function(e) {
      e.preventDefault();
      const evento = this.getAttribute('data-evento');
      // Aquí puedes implementar un modal de confirmación o enviar a un formulario
      alert(`Has confirmado asistencia a la ${evento}. ¡Gracias!`);
    });
  });

  // 7. Cómo llegar
  document.querySelectorAll('.modal-como-llegar').forEach(boton => {
    boton.addEventListener('click', function(e) {
      e.preventDefault();
      const evento = this.getAttribute('data-evento');
      // Aquí puedes implementar un modal con mapa o abrir Google Maps
      window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Av. Pergamino 203, Bogotá')}`);
    });
  });

  // 8. Agendar evento
  document.querySelectorAll('.addeventatc').forEach(boton => {
    boton.addEventListener('click', function(e) {
      e.preventDefault();
      // Configuración para AddEvent
      const addEventConfig = {
        title: "Invitación de José Luz",
        start: "2025-05-15T17:00:00",
        end: "2025-05-15T23:00:00",
        location: "Parroquia Nuestra Señora de Lujan, Av. Pergamino 203, Bogotá",
        description: "Celebración especial de José Luz. ¡Esperamos verte allí!",
        timezone: "America/Bogota"
      };
      
      // Aquí iría la implementación real de AddEvent
      alert("Se abrirá el calendario para agendar el evento");
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