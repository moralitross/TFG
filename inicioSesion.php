<?php

include_once 'config.php';
session_start();

$email=$_POST['email'];
$contrasena=$_POST['contrasena'];

$sql = "SELECT email, contrasena FROM usuarios WHERE email='$email' AND contrasena='$contrasena'";

$result =  $conn->query($sql);
$valoresObtenidos = $result->fetch_assoc();


if ($result->num_rows > 0) {
  $_SESSION['user'] = $valoresObtenidos['email'];

  echo "<script>
          alert('Sesión iniciada correctamente');
          window.location= 'index.php'
        </script>";
} else {

  echo "<script>
          alert('Usuario o contraseña incorrectos');
          window.location= 'inicioSesionHTML.php'
        </script>";
      
}

$conn->close();

?>