<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\user;
class UserController extends Controller
{
     
    public function index()
    {
        return view('user')
         
    }
    public function list()
    {
        return response()->json([
            'user' => \App\Models\User::latest()->get()
        ], Response::HTTP_OK);
         
    }
}