<html>
<!--formulario para insertar elementos en la BBDD-->
    <head>
        <meta http-equiv="content-type"content="text/html;charset=UTF-8">
        <link rel="stylesheet" type="text/css" href="css/styleJuegosHtml.css">

    </head>
    <body> 
    <div class="botonesInicioyCerrarSesion">
        <button onclick="location.href='index.php'" class="botonInicio"></button>
        <form name="juegos" id="juegos" action="cerrarSesion.php" method="post">

            <input type="submit" class="botonCerrarSesion" value="Cerrar Sesión" />

        </form>    
    </div>
<div class="divJuegos">

    <form name="juego1" class="juegosBoton" action="snakeHtml.php" method="post">

        <input type="submit" class="botonSnake" value="Snake" />

    </form>   
    
    <form name="juegos" class="juegosBoton" action="spaceInvadersHtml.php" method="post">

        <input type="submit" class="botonSpaceInv" value="Space Invaders" />

    </form>    
</div>
</body>
</html>