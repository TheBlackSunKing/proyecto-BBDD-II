<template>
    <div class="container mt-4">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card text-white bg-dark">
                    <div class="card-header">Ingrese</div>

                    <div class="card-body">
                        <form action="">
                            <label for="">Usuario</label>
                            <input type="text"  v-model="datos.user" class="form-control mb-2" placeholder="Usuario">
                            <label for="">contraseña</label>
                            <input type="password" v-model="datos.password" class="form-control mb-2" placeholder="********">
                            <button v-on:click.prevent="login()" class="btn btn-secondary">login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { tSParenthesizedType } from '@babel/types';
import axios from 'axios';

    export default {
        data() {
            return{
                datos:{
                    username:'',
                    password:''
                },
                errors: []
            }
        },
        mounted() {
            console.log('Component mounted.')
        },
        methods: {
            login(){
                this.$router.push({name: "home"});
                axios.post('/api/login', this.datos).then(()=> {
                    this.$router.push({name: "Home"});
                }).catch((error) => {
                    this.error.response.data.errors;
                })
            }
        }
    }
    
</script>