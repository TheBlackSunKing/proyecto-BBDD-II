<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/*Route::get('/', function () {
    return view('welcome');
});*/

Route::get('{any}', function () {
    return view('layouts.app');
})->where('any','.*');

/**
 * ya en el archivo routes.js manejamos las rotas para el frontent, creo que
 * aqui deberiamos manejar todas las del
 * 
 * Route::get('/login', function () {
    return view('layouts.login');
});*/
