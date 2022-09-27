<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pasaje extends Model
{
    use HasFactory;
    protected $fillable=['pasajero','unidad','puesto','fecha_venta','fecha_salida','total'];
}
