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
        <link rel="stylesheet" href="css/reset.css">
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>        
        <div id="add-container">
            <input type="text" />
            <button>Add</button>
        </div>

        <div id="places-container">
            <div class="item">
                <div class="remove">X</div>
                Paris
            </div>
            <div class="item">
                <div class="remove">X</div>
                Brisbane
            </div>
            <div class="item">
                <div class="remove">X</div>
                Lima
            </div>
            <div class="item">
                <div class="remove">X</div>
                Nairobi
            </div>
        </div>

        <script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
        <script src="js/script.js"></script>
    </body>
</html>
        