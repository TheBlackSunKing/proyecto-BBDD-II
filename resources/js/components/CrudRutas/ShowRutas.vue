<template>
    <div class="container mt-4">
        <div class="row justify-content-center">
            <div class="col-12">
                <router-link :to='{name:"rutasCrear"}' class="btn btn-success">nueva</router-link>
            </div>
            <div class="col-12">
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead class="bg-primary text-white">
                            <tr>
                                <th>ID</th>
                                <th>Salida</th>
                                <th>Destino</th>
                                <th>Precio</th>
                                <th>Horas</th>
                            </tr>
                        </thead>
                        <tbody> 
                            <tr v-for="ruta in rutas" :key="ruta.id" class="text-white">
                                <td>{{ ruta.id }}</td>
                                <td>{{ ruta.salida }}</td>
                                <td>{{ ruta.destino }}</td>
                                <td>{{ ruta.precio }}</td>
                                <td>{{ ruta.horas }}</td>
                                <td>
                                    <router-link :to='{name:"rutasEditar", params:{id:ruta.id}}' v-if="user_data != null" class="btn btn-info">editar</router-link>
                                    <a type="button" @click="borrarRuta(ruta.id)" v-if="user_data != null" class="btn btn-danger">eliminar</a>
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
                rutas:[],
                user_data: null
            }
        },

        mounted() {
            if (sessionStorage.getItem('user')!= null) 
                this.user_data = JSON.parse(sessionStorage.getItem('user'));
            this.mostrarRutas()
        },

        methods:{
            async mostrarRutas(){
                await this.axios.get('/api/ruta')
                    .then(response=>{
                        this.rutas=response.data
                    })
                    .catch(error=>{
                        this.ruta=[]
                    })
            },
            borrarRuta(id){
                if (confirm("desea eliminar la ruta?")) {
                    this.axios.delete('/api/ruta/'+id)
                    .then(response=>{
                        this.mostrarRutas()
                    })
                    .catch(error=>{
                        console.log(error)
                    })
                }
            }
        }
    }
</script>