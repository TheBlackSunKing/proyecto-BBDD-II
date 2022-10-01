


<template>
    <main>
        <nav class="navbar navbar-dark bg-dark">
            <router-link to="/" class="navbar-brand">home</router-link>
            <router-link v-if="user_data == null" to="/login" class="navbar-brand">login</router-link>
            <router-link v-if="user_data != null"  to=""  @click.native="logout()" class="navbar-brand">logout</router-link>
<!--_______________________________________rutas y novedad__________________________________________________________-->
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="rutas" data-bs-toggle="dropdown" aria-expanded="false">rutas</button>
                    <ul class="dropdown-menu" aria-labelledby="rutas">
                        <li><router-link to="/showrutas" class="dropdown-item">Rutas</router-link></li>
                        <li><router-link to="/createrutas" class="dropdown-item">Nueva ruta</router-link> </li>
                        <li><router-link to="/createnovedad" class="dropdown-item">¿Alguna novedad?</router-link> </li>
                    </ul>
            </div>
             
<!--_______________________________________clientes__________________________________________________________-->
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="clientes" data-bs-toggle="dropdown" aria-expanded="false">clientes</button>
                    <ul class="dropdown-menu" aria-labelledby="clientes">
                        <li><router-link to="/clientes" class="dropdown-item">ver clientes</router-link></li>
                        <li><router-link to="/createcliente" class="dropdown-item">Registrar</router-link> </li>
                    </ul>
            </div>
<!--_______________________________________pasajes__________________________________________________________-->
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="pasaje" data-bs-toggle="dropdown" aria-expanded="false">Pasaje</button>
                    <ul class="dropdown-menu" aria-labelledby="pasaje">
                        <li><router-link to="/createpasaje" class="dropdown-item">Generar</router-link></li>
                        
                    </ul>
            </div>

<!--_______________________________________autobus__________________________________________________________-->            
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="clientes" data-bs-toggle="dropdown" aria-expanded="false">autobuses</button>
                    <ul class="dropdown-menu" aria-labelledby="clientes">
                        <li><router-link to="/createbuses" class="dropdown-item">Registrar</router-link> </li>
                    </ul>
            </div>
<!--_______________________________________empleado__________________________________________________________-->            
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="clientes" data-bs-toggle="dropdown" aria-expanded="false">Empleados</button>
                    <ul class="dropdown-menu" aria-labelledby="clientes">
                        <li><router-link to="/createempleado" class="dropdown-item">Registrar</router-link> </li>
                    </ul>
            </div>

            <router-link to="/log" class="navbar-brand">registro</router-link>

        </nav>

        <div>
            <router-view></router-view> 
        </div>

        
    </main>
	

</template>

<script>
    import {eventBus} from '../app.js'
    export default {
        
        mounted() {
            console.log('barra de navegacion puesta');
            
            this.storage();
        },
        created() {
            eventBus.$on('fireMethod', () => {
                this.storage();
            })
        },
        data(){
            return{
                user_data: null
            }
        },
        methods:{
            logout(){
                sessionStorage.clear()
                console.log ("Te has deslogeado")
                this.user_data = null;
                //Post data, crear una funcion que borre el Token antes de terminar con esto
                /*axios.post('/api/logout').then((res)=>{
                    console.log(res);
                    
                    this.$router.push({ name: "Home"})
                })*/
            },
            storage(){
                this.user_data = JSON.parse(sessionStorage.getItem('user'));
            }
        }
    }
</script>