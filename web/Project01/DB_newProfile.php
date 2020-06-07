<?php
    require '../accessDB.php';
    $db = getDB();

    $username = htmlspecialchars($_POST['username']);
    $password = password_hash(htmlspecialchars($_POST['password']), PASSWORD_DEFAULT);

   $stmt = $db->prepare('INSERT INTO profiles user_name, password VALUES (:username, :password)');
   $stmt->bindValue(':username',$username,PDO::PARAM_STR);
   $stmt->bindValue(':password', $password, PDO::PARAM_STR);
   $stmt->execute();

   header('Location ptLogin.php');
   die();

?>