<template>
    <main>
        <nav class="navbar navbar-dark bg-dark">
            <router-link to="/">home</router-link>
            <router-link to=/login>login</router-link>
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