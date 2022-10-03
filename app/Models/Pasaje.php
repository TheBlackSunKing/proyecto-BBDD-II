<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pasaje extends Model
{
    use HasFactory;
    protected $fillable=['pasajero_id','referencia','metodo','fecha_venta','fecha_salida','total'];
}
