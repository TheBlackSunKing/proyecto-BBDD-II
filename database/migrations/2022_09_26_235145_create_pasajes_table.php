<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePasajesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pasajes', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('pasajero_id');
            $table->foreign('pasajero_id')->references('id')->on('pasajeros');
            //$table->unsignedBigInteger('autobus_id');
            $table->string('metodo');
            $table->string('referencia');
            //$table->foreign('autobus_id')->references('id')->on('autobuses');
            //$table->integer('puesto');
            $table->timestamp('fecha_venta');
            $table->timestamp('fecha_salida');
            $table->float('total');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pasajes');
    }
}
