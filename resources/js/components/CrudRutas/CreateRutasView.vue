<template>
    <div class="container mt-4">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card text-white bg-dark">
                    <div class="card-header">Ingrese</div>

                    <div class="card-body">
                        <form v-on:submit.prevent="crear"> <!--se refuere al metodo en el script de abajo-->
                            <label for="">Salida</label>
                            <input type="text" class="form-control mb-2" v-model="ruta.salida">
                            <label for="">Destino</label>
                            <input type="text" class="form-control mb-2" v-model="ruta.destino">
                            <label for="">Precio</label>
                            <input type="number" class="form-control mb-2" v-model="ruta.precio">
                            <label for="">hora de salida</label>
                            <input type="time" class="form-control mb-2" v-model="ruta.horas">
                            
                            <button type="submit" class="btn btn-primary">guardar</button>
                            
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name:"ruta-crear",
    data(){
        return{
            ruta:{
                salida:"",
                destino:"",
                precio:"",
                horas:""

            }
        }
    },
    methods:{
        async crear(){
            await this.axios.post('/api/ruta', this.ruta)
               .then(response=>{
                this.$router.push({name:"rutas"})
               })
               .catch(error=>{
                console.log(error)
               })
        }
    }
}
</script>