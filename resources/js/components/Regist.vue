<template>
    <div class="container mt-4">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card text-white bg-dark">
                    <div class="card-header">Registrar</div>

                    <div class="card-body">
                        <form action="">
                            <label for="">Name</label>
                            <input type="text"  v-model="form.name" class="form-control mb-2" placeholder="Nombre">
                            <label for="">Email</label>
                            <input type="text"  v-model="form.email" class="form-control mb-2" placeholder="Email">
                            <label for="">Contraseña</label>
                            <input type="password" v-model="form.password" class="form-control mb-2" placeholder="********">
                            <label for="">Confirme Contraseña</label>
                            <input type="password" v-model="form.password_confirmation" class="form-control mb-2" placeholder="********">
                            <button v-on:click.prevent="saveForm()" class="btn btn-secondary">Registrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            form:{
                name: '',
                email: '',
                password:'',
                password_confirmation:''
            },
            errors:[]
        }
    },
    methods:{
        saveForm(){
            axios.post('/api/register', this.form).then(() =>{
                console.log('saved');
            }).catch((error) =>{
                this.errors = error.response.data.errors;
            })
        }
    }
  }
</script>