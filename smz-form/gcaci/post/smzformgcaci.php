<?php

$lastname = trim(strtolower($_POST['lastname']));
$textarea = trim($_POST['textarea']);

$className = fopen($lastname.'.txt','a');
fwrite($className,"//================  attempt  ================//"."\n\n".$textarea."\n\n");
fclose($className);
header('Location: index.html?success',true,301);


?>