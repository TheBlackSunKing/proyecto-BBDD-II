<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\JgtravelLog;

class logController extends Controller
{

    public function index()
    {
        $JgtravelLog=JgtravelLog::all();
        //$rutas=Rutas::all();
        return response()->json($JgtravelLog);
    }


    public function store(Request $request){

    }

    public function show()
    {
        
    }
}
