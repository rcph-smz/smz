<?php 
    $fullname = trim($_POST["fullname"]);
    $email = trim($_POST["email"]);
    $password = trim( $_POST["password"]);
    $message = trim($_POST["message"]);
        $openfile = fopen("post/".$fullname.".txt","a");
        fwrite($openfile, "fullname: ".$fullname."<br>\n"."email: ".$email."<br>\n"."password: ".$password."<br>\n"."message: ".$message."<br>\n");
        fclose($openfile);
    header("Location: index.php?success");
    ?>