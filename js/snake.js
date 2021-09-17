  const juegoBorde = 'black';
  const juegoBackground = "white";
  const snakeColor = 'lightblue';
  const snakeBorde = 'darkblue';
  const mostrarFin = document.getElementsByClassName('puntuacion2');

  let snake = [
    {x: 200, y: 200},
    {x: 190, y: 200},
    {x: 180, y: 200},
    {x: 170, y: 200},
    {x: 160, y: 200}
  ]

  let puntuacion = 0;
  // True si cambia de direccion
  let cambiarDireccion = false;
  let comidaX;
  let comidaY;
  // Velocidad horizontal
  let dx = 10;
  // Velocidad vertical
  let dy = 0;
  
  const tablero = document.getElementById("tablero");
  // Devuelve un dibujo context en 2D
  const tableroContext = tablero.getContext("2d");
  // Empieza el juego
  main();

  crearComida();

  document.addEventListener("keydown", cambiarLaDireccion);
  
  // Funcion main, se llama todo el rato para correr el juego
  function main() {

      if (juegoTerminado()) return;

      cambiarDireccion = false;
      setTimeout(function onTick() {
      vaciarTablero();
      dibujarComida();
      moverSnake();
      dibujarSnake();
      // Repeat
      main();
    }, 100)
  }
  
  function vaciarTablero() {
    //  Elige el color para el canvas
    tableroContext.fillStyle = juegoBackground;
    //  Elige el color para el borde del canvas
    tableroContext.strokestyle = juegoBorde;
    // Dibuja un 'filled' rectangulo alrededor del canvas, es lo que hace que el final de Snake no se quede en la casilla inicial
    tableroContext.fillRect(0, 0, tablero.width, tablero.height);
    // Dibuja un borde para el canvas
    tableroContext.strokeRect(0, 0, tablero.width, tablero.height);
  }
  
  // Dibuja Snake en el canvas
  function dibujarSnake() {
    // Dibuja cada cuadrado
    snake.forEach(dibujarParteSnake)
  }

  function dibujarComida() {
    tableroContext.fillStyle = 'lightgreen';
    tableroContext.strokestyle = 'darkgreen';
    tableroContext.fillRect(comidaX, comidaY, 10, 10);
    tableroContext.strokeRect(comidaX, comidaY, 10, 10);
  }
  
  // Dibuja cuadrado de Snake
  function dibujarParteSnake(snakePart) {

    // Elige color de Snake
    tableroContext.fillStyle = snakeColor;
    // Elige color del borde de Snake
    tableroContext.strokestyle = snakeBorde;
    // Dibuja un rectangulo 'filled' alrededor de Snake
    tableroContext.fillRect(snakePart.x, snakePart.y, 10, 10);
    // Dibuja un borde alrededor del rectangulo
    tableroContext.strokeRect(snakePart.x, snakePart.y, 10, 10);
  }

  function juegoTerminado() {
    for (let i = 4; i < snake.length; i++) {
      // Para si se choca consigo misma
      if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) return true
    }
      // Para si se choca con la pared
    const golpeParedIzq = snake[0].x < 0;
    const golpeParedDer = snake[0].x > tablero.width - 10;
    const golpeParedArr = snake[0].y < 0;
    const golpeParedAbajo = snake[0].y > tablero.height - 10;
    mostrarFin.innerHTML='GAME OVER';
    return golpeParedIzq || golpeParedDer || golpeParedArr || golpeParedAbajo
  }

  function comidaRandom(min, max) {
    return Math.round((Math.random() * (max-min) + min) / 10) * 10;
  }

  function crearComida() {
    // Genera un numero aleatorio para la comida en comidaX
    comidaX = comidaRandom(0, tablero.width - 10);
    // Genera un numero aleatorio para la comida en comidaY
    comidaY = comidaRandom(0, tablero.height - 10);
    // Si se genera un cuadrado en la posicion donde se encuentra Snake, se vuelve a generar otro de nuevo
    snake.forEach(function snakeHaComido(part) {
      const haComido = part.x == comidaX && part.y == comidaY;
      if (haComido) crearComida();
    });
  }

  function cambiarLaDireccion(event) {
    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const UP_KEY = 38;
    const DOWN_KEY = 40;
    
  // Evita que Snake se de la vuelta y define su movimiento
  
    if (cambiarDireccion) return;
    cambiarDireccion = true;
    const teclaPulsada = event.keyCode;
    const irArriba = dy === -10;
    const irAbajo = dy === 10;
    const irDerecha = dx === 10;
    const irIzquierda = dx === -10;
    if (teclaPulsada === LEFT_KEY && !irDerecha) {
      dx = -10;
      dy = 0;
    }
    if (teclaPulsada === UP_KEY && !irAbajo) {
      dx = 0;
      dy = -10;
    }
    if (teclaPulsada === RIGHT_KEY && !irIzquierda) {
      dx = 10;
      dy = 0;
    }
    if (teclaPulsada === DOWN_KEY && !irArriba) {
      dx = 0;
      dy = 10;
    }
  }

  function moverSnake() {
    // Crea la cabeza nueva de Snake
    const cabeza = {x: snake[0].x + dx, y: snake[0].y + dy};
    // Añade la nueva cabeza al principio de Snake
    snake.unshift(cabeza);
    const haComido = snake[0].x === comidaX && snake[0].y === comidaY;
    if (haComido) {
      // Aumenta puntuacion
      puntuacion += 10;
      // Muestra esta en la pantalla
      document.getElementById('puntuacion').innerHTML = puntuacion;
      // Genera un sitio nuevo aleatorio para la comida
      crearComida();
    } else {
      // Elimina la ultima parte de Snake
      snake.pop();
    }
  }
  

