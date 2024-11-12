<?php include 'connection.php';?>

<?php
if(isset($_POST['SignUp'])){

    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $username = $_POST['username'];
    $password = $_POST['password'];

    $query="INSERT INTO signup (email,contact,username,password) VALUES ('$email','$phone','$usename','$password')";

    $data = mysqli_query($con, $query);
    if($data){
        echo "data inserted successfully";
    }
    else{
        echo "data not inserted";
    }

}
?>