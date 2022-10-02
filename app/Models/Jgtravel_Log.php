<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Jgtravel_Log extends Model
{
    use HasFactory;
    protected $fillable=['tipo','descripcion'];
}
