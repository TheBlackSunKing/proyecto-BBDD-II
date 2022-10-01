<template>
    <div class="container mt-4">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card text-white bg-dark">
                    <div class="card-header">Ingrese</div>

                    <div class="card-body">
                        <form action="">
                            <label for="">Email</label>
                            <input placeholder="Email" type="email" v-model="form.email" class="form-control mb-2">
                            <label for="">contraseña</label>
                            <input placeholder="Password" type="password" v-model="form.password" name="password" class="form-control mb-2">
                            <button v-on:click.prevent="login()" class="btn btn-secondary">login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {eventBus} from '../app.js'
    export default {
        mounted() {
            console.log('Component mounted.')
        },
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
             login(){
                 axios.post('/api/login', this.form).then(res=>{
                    //console.log(res);                    
                    //localStorage.setItem('token', JSON.stringify(res.data.data.token)) //store them from response  
                    sessionStorage.setItem('user', JSON.stringify((res.data.data)))
                    //console.log(localStorage.getItem('token'));
                    //console.log('User:', JSON.parse(sessionStorage.getItem('user')));
                    console.log('Login sucess');
                    console.log('Rol:',JSON.parse(sessionStorage.getItem('user')).user.user_role);     
                    eventBus.$emit('fireMethod');   
                    this.$router.push({ name: "home"});
                     
                                         
                }).catch((error) =>{
                this.errors = error.response.data.errors;
                })
             }
        }
    }
    
</script>
