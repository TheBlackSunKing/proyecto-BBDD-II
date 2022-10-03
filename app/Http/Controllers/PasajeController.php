<?php

namespace App\Http\Controllers;

use App\Models\Pasaje;
use Illuminate\Http\Request;
use App\Models\JgtravelLog;


class PasajeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $pasajes=Pasaje::all();
        //$rutas=Rutas::all();
        return response()->json($pasajes);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $ruta=Ruta::create($request->all());
        //$ruta=Ruta::create($request->post);
        JgtravelLog::create([
            "tipo" => 'Ruta',
            'descripcion' => 'Se creo la ruta: '.$ruta,
        ]);
        return response()->json([
            'ruta'=>$ruta
        ]);
       
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Ruta $ruta)
    {
        return response()->json($ruta);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $ruta->fill($request->post())->save();

        return response()->json([
            'ruta'=>$ruta
        ]);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($ruta)
    {
        $post = ruta::find($ruta);
        JgtravelLog::create([
            "tipo" => 'Ruta',
            'descripcion' => 'Se Borro la ruta: '.$post,
        ]);
        $post->delete();
        return response()->json([
            'mensaje'=>'ruta eliminada'
        ]);
    }
}
