<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>display accounts</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: 0;
        }
        body {
            background: lavender;
        }
    </style>
</head>
<body>
<?php 

foreach (glob("*.txt") as $filename)
{
  echo "<br>";
  include $filename;
  echo "<br>";

}

?>
</body>
</html>