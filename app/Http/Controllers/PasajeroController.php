<?php

namespace App\Http\Controllers;

use App\Models\Pasajero;
use Illuminate\Http\Request;
use App\Models\JgtravelLog;

class PasajeroController extends Controller
{
    
    public function index()
    {
        $pasajero=Pasajero::all();
        //$rutas=Rutas::all();
        return response()->json($pasajero);
    }

    
    public function create()
    {
        //
    }

    
    public function store(Request $request)
    {
        $pasajero=Pasajero::create($request->all());
        //$ruta=Ruta::create($request->post);
        JgtravelLog::create([
            "tipo" => 'Pasajero',
            'descripcion' => 'Se registro el nuevo cliente: '.$pasajero,
        ]);
        return response()->json([
            'pasajero'=>$pasajero
        ]);
       
    }

    
    public function show(Pasajero $pasajero)
    {
        return response()->json($pasajero);
    }

    
    public function edit($id)
    {
        //
    }

    
    public function update(Request $request, $id)
    {
        $pasajero->fill($request->post())->save();

        return response()->json([
            'pasajero'=>$pasajero
        ]);

    }

//un destroy por si acaso
    public function destroy($pasajero)
    {
        $post = pasajero::find($pasajero);
        JgtravelLog::create([
            "tipo" => 'Pasajero',
            'descripcion' => 'Se elimino pasajero: '.$post,
        ]);
        $post->delete();
        return response()->json([
            'mensaje'=>'pasajero eliminado'
        ]);
    }
}
