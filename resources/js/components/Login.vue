<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card text-white bg-dark">
                    <div class="card-header">Ingrese</div>

                    <div class="card-body">
                        <form action="">
                            <label for="">Usuario</label>
                            <input type="text" class="form-control mb-2">
                            <label for="">contraseña</label>
                            <input type="text" class="form-control mb-2">
                            <button class="btn btn-secondary">login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
