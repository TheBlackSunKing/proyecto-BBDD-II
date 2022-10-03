<template>
    <div class="container mt-4">
        <div class="row justify-content-center">
            <div class="col-12">
                <router-link :to='{name:"clientesCrear"}' class="btn btn-success">Registrar</router-link>
            </div>
            <div class="col-12">
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead class="bg-primary text-white">
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Cedula</th>
                                <th>Email</th>
                                <th>Direccion</th>
                                <th>Telefono</th>
                            </tr>
                        </thead>
                        <tbody> 
                            <tr v-for="pasajero in pasajeros" :key="pasajero.id" class="text-white">
                                <td>{{ pasajero.id }}</td>
                                <td>{{ pasajero.nombre }}</td>
                                <td>{{ pasajero.cedula }}</td>
                                <td>{{ pasajero.email}}</td>
                                <td>{{ pasajero.direccion }}</td>
                                <td>{{ pasajero.telefono }}</td>
                                <td>
                                    <router-link :to='{name:"pasajerosEditar", params:{id:pasajero.id}}' class="btn btn-info">editar</router-link>
                                    <!--<a type="button" @click="borrarRuta(pasajero.id)" class="btn btn-danger">eliminar</a>-->
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
        data(){
            return{
                pasajeros:[]
            }
        },

        mounted() {
            this.mostrarPasajeros
        },

        methods:{
            async mostrarRutas(){
                await this.axios.get('/api/pasajero')
                    .then(response=>{
                        this.pasajeros=response.data
                    })
                    .catch(error=>{
                        this.pasajero=[]
                    })
            }
        }
    }
</script>