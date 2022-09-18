<template>
    <main>
        <nav class="navbar navbar-dark bg-dark">
            <router-link to="/" class="navbar-brand">home</router-link>
            <router-link to="/login" class="navbar-brand">login</router-link>
            <router-link to="sing-up" class="navbar-brand">Sing up</router-link>
            <router-link to="/showrutas" class="navbar-brand">Rutas</router-link> 
            <router-link to="/createrutas" class="navbar-brand">Nueva ruta</router-link> 
            <!--creo que seria bueno hacer un menu desplegable para las rutas
                la idea que tengo es que el administrador haga de todo y luego 
                ir quitando cosas segun el usuario-->
            <router-link to=/clientes class="navbar-brand">Clientes</router-link>

        </nav>

        <div>
            <router-view></router-view> 
            <foocompnt-component></foocompnt-component>   
        </div>

        
    </main>
	

</template>

<script>
    export default {
        mounted() {
            console.log('barra de navegacion puesta');
        }
    }
</script>