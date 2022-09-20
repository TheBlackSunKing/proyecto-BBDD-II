<template>
    <div class="container mt-4">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card text-white bg-dark">
                    <div class="card-header">Ingrese</div>

                    <div class="card-body">
                        <form action="">
                            <label for="">ruta</label>
                            <select name="rutas" id="rutas" class="form-control mb-2"></select> 

                            <!--hacer que en funcion de la ruta seleccionada, mostrar tasa de salida, fecha
                                de venta iva, poder asignar puesto indicar el numero de la unidad-->

                            <label for="">Pasajero</label> 
                            <input type="text" class="form-control mb-2"> <!--¿buscar por cedula?-->
                            <label for="">Fecha</label>
                            <input type="text" class="form-control mb-2">
                            <label for="">hora de salida</label>
                            <input type="text" class="form-control mb-2">
                            <select name="pago" id="pago"></select>
                            <label for="">Tipo de pago</label> 
                            <select name="pago" id="pago" class="form-control mb-2">hola</select>

                            <!--segun lo que elija aparecera un menu para registrar el pago-->




                            <router-link to="/" class="btn btn-secondary">Completar</router-link>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
