<template>
    <div class="container mt-4">
        <div class="row justify-content-center">
            <div class="col-12">
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead class="bg-primary text-white">
                            <tr>
                                <th class="text-center">ID</th>
                                <th class="col-md-1 text-center">fecha de creacion</th>
                                <th class="text-center">tipo</th>
                                <th class="col-md-8 text-center">descripcion</th>
                            </tr>
                        </thead>
                        <tbody> 
                            <tr v-for="log in logs" :key="log.id" class="text-white">
                                <td>{{ log.id }}</td>
                                <td>{{ log.created_at}}</td>
                                <td>{{ log.tipo }}</td>
                                <td>{{ log.descripcion }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            logs:[]
        }
    },

    mounted() {
        this.mostrarlogs()
    },

    methods:{
        async mostrarlogs(){
            await this.axios.get('/api/log')
                .then(response=>{
                    this.logs=response.data
                })
                .catch(error=>{
                    this.logs=[]
                })
        },
        borrarlog(id){
            if (confirm("desea eliminar la ruta?")) {
                this.axios.delete('/api/log/'+id)
                .then(response=>{
                    this.mostrarlogs()
                })
                .catch(error=>{
                    console.log(error)
                })
            }
        }
    }
}
</script>