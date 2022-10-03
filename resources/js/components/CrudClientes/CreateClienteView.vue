<template>
    <div class="container mt-4">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card text-white bg-dark">
                    <div class="card-header">Ingrese</div>

                    <div class="card-body">
                        <form v-on:submit.prevent="crear">
                            <label for="">Cedula</label>
                            <input type="text" class="form-control mb-2" v-model="pasajero.Cedula">
                            <label for="">Nombre Completo</label>
                            <input type="text" class="form-control mb-2" v-model="pasajero.Nombre">
                            <label for="">Email</label>
                            <input type="text" class="form-control mb-2" v-model="pasajero.Email">
                            <label for="">Direccion</label>
                            <input type="text" class="form-control mb-2" v-model="pasajero.Direccion">
                            <label for="">Telefono</label>
                            <input type="text" class="form-control mb-2" v-model="pasajero.Telefono">
                            
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
                direccion:"",
                telefono:""

            }
        }
    },
    methods:{
        async crear(){
            await this.axios.post('/api/pasajero', this.pasajero)
               .then(response=>{
                this.$router.push({name:"pasajeros"})
               })
               .catch(error=>{
                console.log(error)
               })
        }
    }
}
</script>