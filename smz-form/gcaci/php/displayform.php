
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/smzformgcaci.css">
    <script src="../js/smzformgcaci.js" async defer></script>
    <title> display document </title>
</head>
<body>
    <header class="smz-header">
        document
    </header>
<?php 

foreach (glob("../post/*.txt") as $filename)
{
  echo "<br>";
  include $filename;
  echo "<br>";

}

?>
    
   
</body>
</html>