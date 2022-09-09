<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<title>JGtravels</title>
	<link rel="stylesheet" href="{{asset('css/fondo.css')}}">
    <link href="{{asset('css/app.css')}}" rel="stylesheet">
</head>
<body>
	<div id="app">
		<navbar-component></navbar-component>
        <hr>
		@yield('content') <!---hago referencia a lo que esta dentro de section--->
		
	</div>
	
	<script src="{{mix('js/app.js')}}"></script>
</body>
</html>


