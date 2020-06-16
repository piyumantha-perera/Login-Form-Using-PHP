<?php

$con = new mysqli("localhost", "root", "", "login") or die("Error" . $con->connect_error);
if (isset($_POST['submit'])) {
    $first_name = $_POST['fname'];
    $lastname = $_POST['lname'];
    $email = $_POST['email'];
    $dob = $_POST['dob'];
    $password = $_POST['psw'];
    $conpassword = $_POST['cpsw'];


    $sqls = "INSERT INTO register(fname,lname,email,dob,psw,cpsw) VALUES('$first_name','$lastname','$email','$dob','$password','$conpassword')";
    $result = $con->query($sqls) or die($con->error);
    if ($result === true) {
        echo '<script type="text/javascript">';
        echo 'alert("registeration was Done Successfully.Thank You...");';
        echo 'location.href="register.php";';
        echo '</script>';
    } else {
        echo "error";
    }
}
