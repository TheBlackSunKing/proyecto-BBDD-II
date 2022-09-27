<template>
    <div class="container mt-4">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card text-white bg-dark">
                    <div class="card-header">Ingrese</div>

                    <div class="card-body">
                        <form action="">
                            <label for="">Usuario</label>
                            <input placeholder="Email" type="email" v-model="form.email" class="form-control mb-2">
                            <label for="">contraseña</label>
                            <input placeholder="Password" type="password" v-model="form.password" name="password" class="form-control mb-2">
                            <button v-on:click.prevent="loginUser()" class="btn btn-secondary">login</button>
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
                    email: '',
                    password: ''
                },
                errors: []
            }
        },
        methods:{
             loginUser(){
                 axios.post('/api/login', this.form).then(() =>{
                     this.$router.push({ name: "home"});
                     console.log('Login sucess');                     
                }).catch((error) =>{
                this.errors = error.response.data.errors;
                })
             }
        }
    }
    </script>