<html>
    <head>
        <title>My php example</title>
    </head>
    
    <body>
        <form method="post">
            
            <?php
                echo "<h1>Welcome To PHP</h1>"
            ?>
            <label for="username"></label>
            <input type="text" id="username" name="username">
            
            Please Vote for your Favourite Mobile Brand
            <label><input type="radio" name="brand" id="nokia" value="nokia">Nokia</label>
            <label><input type="radio" name="brand" id="samsung" value="samsung"></label>
            <label><input type="radio" name="brand" id="apple" value="apple"></label>
            <label><input type="radio" name="brand" id="sony" value="sony"></label>

        </form>
    </body> 
</html> 