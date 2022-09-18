<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class autobus extends Model
{
    use HasFactory;
    protected fillable=['marca','num_asientos','modelo','fecha_de_fabricacion']
}
