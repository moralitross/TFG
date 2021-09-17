const grid = document.querySelector('.grid')
const mostrarPunt = document.querySelector('.tablero')

// Tambien es la posicion en general

let posicionInicialShooter = 202
let width = 15
let direccion = 1
let invadersId
let moverDerecha = true
let invadersEliminados = []
let resultados = 0

// Crea el tablero 15 x 15 divs
for (let i = 0; i < 225; i++) {
  const tableroJuego = document.createElement('div')
  grid.appendChild(tableroJuego)
}

const cuadrados = Array.from(document.querySelectorAll('.grid div'))

const alienInvaders = [
  0,1,2,3,4,5,6,7,8,9,
  15,16,17,18,19,20,21,22,23,24,
  30,31,32,33,34,35,36,37,38,39
]

// Dibuja a los invaders, comprueba que no se hayan eliminado
function dibujarInvaders() {
  for (let i = 0; i < alienInvaders.length; i++) {
    if(!invadersEliminados.includes(i)) {
      cuadrados[alienInvaders[i]].classList.add('invader')
    }
  }
}

dibujarInvaders()

function eliminarInvader() {
  for (let i = 0; i < alienInvaders.length; i++) {
    cuadrados[alienInvaders[i]].classList.remove('invader')
  }
}

// Crea el shooter en la posicion indicada por posicionIncialShooter para que se muestre al entrar en la pagina

cuadrados[posicionInicialShooter].classList.add('shooter')


function moverShooter(e) {
  // Elimina el shooter creado inicialmente
  cuadrados[posicionInicialShooter].classList.remove('shooter')
  // En casa de tecla izq o derecha, define el movimiento del shooter 
  switch(e.key) {
    case 'ArrowLeft':
      // Controla que el Shooter llegue hasta los limites del tablero y con el -=1 o +=1 evita que cambie de fila al llegar al limite
      if (posicionInicialShooter % width !== 0) posicionInicialShooter -=1
      break
    case 'ArrowRight' :
      if (posicionInicialShooter % width < width -1) posicionInicialShooter +=1
      break
  }
  // Crea un shooter cada vez que se mueve
  
  cuadrados[posicionInicialShooter].classList.add('shooter')
}
// Permite que el Shooter se mueva

document.addEventListener('keydown', moverShooter)

function moverInvaders() {
  // Define a que altura tienen que bajar un fila para acercarse al shooter 
  const limiteIzquierda = alienInvaders[0] % width === 0
  const limiteDerecha = alienInvaders[alienInvaders.length - 1] % width === width -1
  eliminarInvader()

  if (limiteDerecha && moverDerecha) {
    // Define que bajen hacia abajo, para no bajar en diagonal o varios por separado y con moverDerecha evita que bajen completamente hacia abajo
    // en una sola columna
    for (let i = 0; i < alienInvaders.length; i++) {
      alienInvaders[i] += width +1
      direccion = -1
      moverDerecha = false
    }
  }
    // Lo mismo que lo anterior pero con el limite izquierdo 
  if(limiteIzquierda && !moverDerecha) {
    for (let i = 0; i < alienInvaders.length; i++) {
      alienInvaders[i] += width -1
      direccion = 1
      moverDerecha = true
    }
  }

  // Hace que el movimiento del conjunto de Invaders sea de uno en uno, por cada div

  for (let i = 0; i < alienInvaders.length; i++) {
    alienInvaders[i] += direccion
  }

  // Dibuja los Invaders cada vez que se mueven de posicion

  dibujarInvaders()

  // Si se choca Invader y Shooter el juego llega a su fin, clearInterval hace que dejen de moverse

  if (cuadrados[posicionInicialShooter].classList.contains('invader', 'shooter')) {
    mostrarPunt.innerHTML = 'GAME OVER'
    clearInterval(invadersId)
  }

  for (let i = 0; i < alienInvaders.length; i++) {
    if(alienInvaders[i] > (cuadrados.length)) {
      mostrarPunt.innerHTML = 'GAME OVER'
      clearInterval(invadersId)
    }
  }
  // Si eliminas a tantos Invaders hay creados, ganas

  if (invadersEliminados.length === alienInvaders.length) {
    mostrarPunt.innerHTML = 'YOU WIN'
    clearInterval(invadersId)
  }
}
invadersId = setInterval(moverInvaders, 600)

function shoot(e) {
  let laserId
  let posicionInicialLaser = posicionInicialShooter
  function moverLaser() {
    cuadrados[posicionInicialLaser].classList.remove('laser')
    // Hace que el laser vaya hacia arriba en vertical
    posicionInicialLaser -= width
    // Cada vez que se mueve se muestra el laser
    cuadrados[posicionInicialLaser].classList.add('laser')

    // Maneja que cuando choquen, elimine al Inader, el Laser y aparezca en Boom
    if (cuadrados[posicionInicialLaser].classList.contains('invader')) {
      cuadrados[posicionInicialLaser].classList.remove('laser')
      cuadrados[posicionInicialLaser].classList.remove('invader')
      cuadrados[posicionInicialLaser].classList.add('boom')

      // Especifica cuanto tiempo dura el Boom
      setTimeout(()=> cuadrados[posicionInicialLaser].classList.remove('boom'), 300)
      // Hace que Laser deje de moverse
      clearInterval(laserId)

      // Cuando choquen Laser e Invader se añade al array de eliminados para que desaparezcan despues del Boom
      const invaderEliminado = alienInvaders.indexOf(posicionInicialLaser)
      invadersEliminados.push(invaderEliminado)
      // Añade y muestra la puntuación
      resultados++
      mostrarPunt.innerHTML = resultados
      console.log(invadersEliminados)

    }

  }
  // Indica la velocidad a la que se mueve el laser y la tecla para disparar
  switch(e.key) {
    case 'ArrowUp':
      laserId = setInterval(moverLaser, 100)
  }
}

// Permite que el Shooter dispare

document.addEventListener('keydown', shoot)