<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<title>JGtravels</title>
	<link rel="stylesheet" href="{{asset('css/fondo.css')}}">
</head>
<body>
	<div id="app">
		<navbar-component></navbar-component>
        <hr>
		<login-component></login-component>
		
	</div>
	
	<script src="{{mix('js/app.js')}}"></script>
</body>
</html>


<!doctype html>
<html lang="{{ app()->getLocale() }}">
    
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel</title>
        <link href="{{asset('css/app.css')}}" rel="stylesheet"> <!--Añadimos el css generado con webpack-->
        
        <style>
        h1 {
        color: blue;
        font-family: verdana;
        font-size: 300%;
        }
        p {
        color: red;
        font-family: courier;
        font-size: 160%;
        }
        </style>
    </head>
    <body>
            <div id="app" class="content"><!--La equita id debe ser app, como hemos visto en app.js-->
                <example-component></example-component><!--Añadimos nuestro componente vuejs-->
            </div>
        <script src="{{asset('js/app.js')}}"></script> <!--Añadimos el js generado con webpack, donde se encuentra nuestro componente vuejs-->
    </body>
</html>