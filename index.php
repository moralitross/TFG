<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>TFG</title>
    <link rel="stylesheet" type="text/css" href="css/styleIndex.css">
</head>
<body>
    <button onclick="location.href='index.php'" class="botonInicio"></button>
    <div class="contenido">
        <h2 class="mensajeInicio">Bienvenido a juegecitos.com</h2>
        <div class="iniciarSes">
            <?php
        
            session_start();
            //var_dump($_SESSION['user']);
            if(!isset($_SESSION['user'])){
                echo "<script>
                        alert('SI DESEA JUGAR DEBE INICIAR SESION PREVIAMENTE');
                    </script>";
                echo "<a href='inicioSesionHtml.php'>INICIAR SESION</a><br>";
            }else{
                echo "<a href='juegosHtml.php'>JUGAR</a><br>";
                echo "<p class='mostrarUsuario'>".$_SESSION['user']."</p>";
                echo "<a href='cerrarSesion.php'>CERRAR SESION</a><br>";
            }
            
            ?>
        </div>
        <h3 class="mensajeInicio2">Aqui podras jugar a miniJuegos de toda la vida</h3>
        <h2 class="mensaje">DISFRUTAD!</h2>
    </div>
</body>
</html>