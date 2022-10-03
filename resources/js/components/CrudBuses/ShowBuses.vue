<template>
    <div class="container mt-4">
        <div class="row justify-content-center">
            <div class="col-12">
                <router-link :to='{name:"busesCrear"}' class="btn btn-success">Registrar</router-link>
            </div>
            <div class="col-12">
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead class="bg-primary text-white">
                            <tr>
                                <th>ID</th>
                                <th>Modelo</th>
                                <th>Placa</th>
                                <th>Asientos</th>
                                <th>año</th>
                            </tr>
                        </thead>
                        <tbody> 
                            <tr class="text-white">
                                <td>ID</td>
                                <td>volvo</td>
                                <td>123 abc</td>
                                <td>40</td>
                                <td>2015</td>
                                <td>
                                    <!--<router-link :to='{name:"busesEditar", params:{id:bus.id}}' class="btn btn-info">editar</router-link>-->
                                    <!--<a type="button" @click="borrarBus(bus.id)" class="btn btn-danger">eliminar</a>-->
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>