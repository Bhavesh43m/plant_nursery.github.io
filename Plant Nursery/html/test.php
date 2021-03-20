<?php
    $arr = array('vivek','madhuri','manali','rahul');
    $username = $_POST['uname'];
    if(in_array($username, $arr)){
        echo "Username already taken. Try another";
    }else{
        echo "Username is available";
    }
?>