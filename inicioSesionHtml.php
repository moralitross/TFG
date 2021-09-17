<html>
<!--formulario para insertar elementos en la BBDD-->
    <head>
        <meta http-equiv="content-type"content="text/html;charset=UTF-8">
        <link rel="stylesheet" type="text/css" href="CSS/styleInicioSesion.css">

    </head>
    <body> 
        <form name="input" id="formIS" action="inicioSesion.php" method="post">
            <div class="inicioSesion">
                <h2>Inicia Sesion o pincha en 'Nuevo Usuario' si no tienes uno</h2>
                <div class="inicioSesion2">
                    
                    Usuario: <input type="text" name="email"  id="usuario"  value=""/><br><br>

                    Contraseña: <input type="password" name="contrasena"  id="contrasena"  value=""/> <br><br>

                    <input type="submit" id="inicioSesion" value="Iniciar Sesión" />
                    
                    <a href='newUserHtml.php'>Nuevo Usuario</a><br>
                </div>
            </div>
        </form>    
    </body>
</html>