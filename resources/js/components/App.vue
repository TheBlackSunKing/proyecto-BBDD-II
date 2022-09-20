<template>
    <main>
        <nav class="navbar navbar-dark bg-dark">
            <router-link to="/" class="navbar-brand">home</router-link>
            <router-link to="/login" class="navbar-brand">login</router-link>
            <router-link to="/registration" class="navbar-brand">registrar</router-link>
            <router-link to=# class="navbar-brand">Link-2</router-link>
            <router-link to=# class="navbar-brand">Link-3</router-link>

        </nav>

        <div>
            <router-view></router-view>    
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