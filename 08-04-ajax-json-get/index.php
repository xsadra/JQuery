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
        <header>
        	<a href="#" id="total-cost">Total $0</a>
        </header>
        <div class="item-box" data-id="123">
        	<img src="images/image.png" />
        	<div class="item-title">Example Destination</div>
        	<p>A very nice place Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</p>
        	<div class="item-price">$199</div>
        	<button>Add to cart</button>
            <div>
        	   <a href="#" class="info-link">More info</a>
        	</div>
            <div class="more-info">
                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem</p>
        	</div>
        </div>
        
        <script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
        <script src="js/script.js"></script>
    </body>
</html>
        