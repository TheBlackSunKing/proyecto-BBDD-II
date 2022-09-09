<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<title>JGtravels-@yield('title')</title>
	<link rel="stylesheet" href="{{asset('css/fondo.css')}}">
</head>
<body>
	<div id="app">
		<navbar-component></navbar-component>
		<login-component></login-component>
		
	</div>
	
	<script src="{{mix('js/app.js')}}"></script>
</body>
</html>


