<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\LoginController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


//Route::get('register', 'App\Http\Controllers\Api\RegisterController@register');
Route::post('register', 'App\Http\Controllers\RegisterController@register');
Route::post('login', 'App\Http\Controllers\LoginController@login');
Route::post('logout', 'App\Http\Controllers\LoginController@logout');
