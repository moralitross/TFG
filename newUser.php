<?php

include_once 'config.php';

$email=$_POST['email'];
$contrasena=$_POST['contrasena'];

$sql = "INSERT INTO usuarios (email, contrasena)
VALUES ('$email','$contrasena')";
if ($conn->query($sql) === TRUE) {
  echo "<script>
          alert('Usuario creado correctamente');
          window.location= 'inicioSesionHtml.php'
        </script>";
} else {
  echo "<script>
          alert('El email usado ya está registrado');
          window.location= 'newUserHtml.php'
        </script>";
}

$conn->close();

?>