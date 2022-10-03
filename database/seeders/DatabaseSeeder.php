<?php

namespace Database\Seeders;
use App\Models\User;
use App\Models\Ruta;
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
        $ruta = [
            [
                'salida' => 'Salida 1',
                'destino' => 'Destino 1',
                'precio' => '200',
                'horas' => '15:50:00',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'salida' => 'Salida 2',
                'destino' => 'Destino 2',
                'precio' => '260',
                'horas' => '15:20:00',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'salida' => 'Salida 3',
                'destino' => 'Destino 3',
                'precio' => '250',
                'horas' => '21:50:00',
                'created_at' => now(),
                'updated_at' => now()
            ],
            
        ];
                
        DB::table('rutas')->insert($ruta);

        $pasajero = [
            [
                'nombre' => 'Nombre 1',
                'cedula' => 'Cedula 1',
                'email' => 'dll@example.com',
                'telefono' => '20202020'
            ],  
            [
                'nombre' => 'Nombre 2',
                'cedula' => 'Cedula 2',
                'email' => 'dll2@example.com',
                'telefono' => '20202021'
            ],                      
        ];                
        DB::table('pasajeros')->insert($pasajero);
        $pasaje = [
            [
                'pasajero_id' => '1',
                'metodo' => 'Pago amigo banesco',
                'total' => '1000',
                'referencia' => '2003120',
                'fecha_venta' => now(),
                'fecha_salida' => now()
            ],  
            [
                'pasajero_id' => '2',
                'metodo' => 'Pago amigo banesco',
                'total' => '1300',
                'referencia' => '2002120',
                'fecha_venta' => now(),
                'fecha_salida' => now()
            ],  
        ];                
        DB::table('pasajes')->insert($pasaje);
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
