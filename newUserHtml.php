<html>
<!--formulario para insertar elementos en la BBDD-->
    <head>
        <meta http-equiv="content-type"content="text/html;charset=UTF-8">
        <link rel="stylesheet" type="text/css" href="css/styleNewUserHtml.css">

    </head>
    <body> 
        <form name="newUser" id="form3" action="newUser.php" method="post">
            <div class="nuevoUsu">
                <h2>Crear Nuevo Usuario</h2>
                <div class="inicioSes2">
                    Usuario: <input type="text" id="nUsuario" name="email"/><br><br>

                    Contraseña: <input type="password" id="nContrasena" name="contrasena" /><br><br>
                    
                    <input type="submit" id="enviarNewUser" name="enviar" value="Crear">
                </div>
            </div>
        </form>    
    </body>
</html>