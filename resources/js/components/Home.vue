<template>
	<div class="text-center text-white cover-container d-flex h-100 p-3 mx-auto flex-column mt-5">
        
        <h1 class="cover-heading text-white">JGTRAVELS VIAJES A TU ALCANCE.</h1>
        <p class="lead">Bienvenido a JGTravels, por favor ingrese o registrese</p>
        <p class="lead">
          <router-link  v-if="user_data == null" to="/login" class="btn btn-lg btn-secondary">Ingresar</router-link>
          <!-- <router-link  v-if="user_data != null" to="createempleado" class="btn btn-lg btn-secondary">Registrarse</router-link> -->
        </p>

        <footer class="mastfoot mt-auto">
        <div class="inner">
          <p>proyecto hecho por Jose Emilio Yepez y Helvis Eloy Basantes.</p>
        </div>
        </footer>      
    </div>
</template>

<script>
    export default {
      data(){
        return{
            user_data: null
        }
    },
    methods:{
        logout(){
            axios.post('/api/logout').then((res)=>{
                this.$router.push({ name: "Home"})
            })
        }
    },
    mounted() {
        if (sessionStorage.getItem('user')!= null) {
          this.user_data = JSON.parse(sessionStorage.getItem('user'));
          if (this.user_data.user.user_role == "Administrador"){
            console.log('Bienvenido Administrador')
          }  
          //console.log(user_data )
        }else{
          console.log ("No estas logeado")     
        }
               
      }
    }
</script>