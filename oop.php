<!DOCTYPE html>
<html>
<head>
	<title>Object Oriented PHP</title>
</head>
<body>
	<?php
		class Test
		{
			var $name,$conn;
			function __construct()
			{
				$conn = mysqli_connect("localhost","root","root","university");
			}
		}		
	?>

</body>
</html>