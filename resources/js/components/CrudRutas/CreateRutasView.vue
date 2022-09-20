<template>
    <div class="container mt-4">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card text-white bg-dark">
                    <div class="card-header">Ingrese</div>

                    <div class="card-body">
                        <form action="">
                            <label for="">Salida</label>
                            <input type="text" class="form-control mb-2">
                            <label for="">Destino</label>
                            <input type="text" class="form-control mb-2">
                            <label for="">Precio</label>
                            <input type="text" class="form-control mb-2">
                            <label for="">hora de salida</label>
                            <input type="time" class="form-control mb-2">
                            <router-link to="/" class="btn btn-secondary">Crear</router-link>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
