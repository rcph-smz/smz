<?php

$lastname = trim(strtolower($_POST['lastname']));
$textarea = trim($_POST['textarea']);

$className = fopen('../post/'.$lastname.'.txt','a');
fwrite($className,'<fieldset class="smz-attempt_layout"><legend class="smz-attempt_legend">'.$lastname.'</legend>'.$textarea.'</fieldset>');
fclose($className);
header('Location: index.html?success',true,301);

?>