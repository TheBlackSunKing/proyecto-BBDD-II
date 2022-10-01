<?php

namespace Database\Seeders;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $user = [
            [
            'name' => 'admin',
            'cedula' => 'N/A',
            'email' => 'Admin@jgtravels.com',
            'password' => Hash::make('password'),
            'user_role' => 'Administrador',
            'created_at' => now(),
            'updated_at' => now()
            ],
            [
            'name' => 'empleado',
            'cedula' => 'N/A2',
            'email' => Str::random(10).'@gmail.com',
            'password' => Hash::make('password'),
            'user_role' => 'Empleado',
            'created_at' => now(),
            'updated_at' => now()
            ]
        ];
                
        DB::table('users')->insert($user);
        /*
        DB::table('users')->insert([
            'name' => 'admin',
            'cedula' => 'N/A',
            'email' => Str::random(10).'@gmail.com',
            'password' => Hash::make('password'),
            'user_role' => 'Administrador',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        */

    }

}
