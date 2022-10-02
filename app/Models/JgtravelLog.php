<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JgtravelLog extends Model
{
    use HasFactory;
    protected $fillable=['f_creacion','tipo','descripcion'];
}
