<template>
    <div class="container mt-4">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card text-white bg-dark">
                    <div class="card-header">Ingrese</div>

                    <div class="card-body">
                        <form v-on:submit.prevent="crear">
                            <label for="">Cedula</label>
                            <input type="text" class="form-control mb-2" v-model="pasajero.cedula">
                            <label for="">Nombre Completo</label>
                            <input type="text" class="form-control mb-2" v-model="pasajero.nombre">
                            <label for="">Email</label>
                            <input type="text" class="form-control mb-2" v-model="pasajero.email">
                            <label for="">Direccion</label>
                            <input type="text" class="form-control mb-2" v-model="pasajero.direccion">
                            <label for="">Telefono</label>
                            <input type="text" class="form-control mb-2" v-model="pasajero.telefono">
                            
                            <button type="submit" class="btn btn-secondary">Completar</button>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name:"pasajero-crear",
    data(){
        return{
            pasajero:{
                cedula:"",
                nombre:"",
                email:"",
                telefono:""

            }
        }
    },
    methods:{
        async crear(){
            await this.axios.post('/api/pasajero', this.pasajero)
               .then(response=>{
                this.$router.push({name:"clientes"})
               })
               .catch(error=>{
                console.log(error)
               })
        }
    }
}
</script>