<template>
    <div class="container mt-4">
        <div class="row justify-content-center">
            <div class="col-12">
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead class="bg-primary text-white">
                            <tr>
                                <th>ID</th>
                                <th>Fecha de venta</th>
                                <th>Fecha de Salida</th>
                                <th>Id del pasajero</th>
                                <th>Metodo</th>
                                <th>Referencia</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody> 
                            <tr v-for="pasaje in pasajes" :key="pasaje.id" class="text-white">
                                <td>{{ pasaje.id }}</td>
                                <td>{{ pasaje.fecha_venta }}</td>
                                <td>{{ pasaje.fecha_salida }}</td>
                                <td>{{ pasaje.pasajero_id }}</td>
                                <td>{{ pasaje.metodo }}</td>
                                <td>{{ pasaje.referencia }}</td>
                                <td>{{ pasaje.total }}</td>
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
                pasajes:[]
            }
        },

        mounted() {
            this.mostrarPasajes();
        },

        methods:{
            async mostrarPasajes(){
                await this.axios.get('/api/cliente')
                    .then(response=>{
                        this.pasajes=response.data
                        console.log(JSON.stringify(response.data));
                    })
                    .catch(error=>{
                        this.pasaje=[]
                        
                    })
            }
        }
    }
</script>