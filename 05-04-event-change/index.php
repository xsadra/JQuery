<!DOCTYPE html>
<?php
header('Cache-Control: no-cache, no-store, must-revalidate');
header('Pragma: no-cache');
header('Expires: 0');
?>
<html>
    <head>
        <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta http-equiv="Pragma" content="no-cache" />
        <meta http-equiv="Expires" content="0" />
        <meta charset="utf-8">
        <title>JQUERY</title>
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body> 
        <div id="example" class="container">   
            <select id="place">
                <option value="">Pick your destination</option>
                <option value="santiago" data-price="100">Santiago</option>
                <option value="madrid" data-price="180">Madrid</option>
                <option value="yakarta" data-price="300">Yakarta</option>
                <option value="istambul" data-price="150">Istambul</option>
                <option value="tokyo" data-price="200">Tokyo</option>
            </select>
        </div>
        <div id="result"  class="container"></div>
        <script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
        <script src="js/script.js"></script>
    </body>
</html>
        