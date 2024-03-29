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
        <div id="result"></div>
        <div class="form-container">
            <form id="your-form" method="post" action="formSubmit.json">
                <div class="form-row">
                    <label>Name</label>
                    <input type="text" id="name" name="name" />
                </div>
                <div class="form-row">
                    <label>Address</label>
                    <input type="text" id="address" name="address" />
                </div>
                <div class="form-row">
                    <label>Age</label>
                    <input type="text" id="age" name="age" />
                </div>
                <div class="form-row">
                    <label>Any pets?</label>
                    <input type="checkbox" id="hasPets" name="hasPets" />
                </div>
                <div class="form-row" id="pets-row">
                    <label>Pet</label>
                    <select type="select" id="pet" name="pet" >
                        <option value="">-</option>
                        <option value="Dog">Dog</option>
                        <option value="Cat">Cat</option>
                    </select>
                    <div id="pet-feedback"></div>                
                </div>
                <input type="submit" value="Save" />
            </form>
        </div>
        
        <script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
        <script src="js/script.js"></script>
    </body>
</html>
        
