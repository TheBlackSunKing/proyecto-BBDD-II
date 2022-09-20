<template>
    <div class="container mt-4">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card text-white bg-dark">
                    <div class="card-header">Ingrese</div>

                    <div class="card-body">
                        <form action="">
                            <label for="">Fecha</label>
                            <input type="date" class="form-control mb-2">
                            <label for="">Salida</label>
                            <input type="text" class="form-control mb-2">
                            <label for="">Destino</label>
                            <input type="text" class="form-control mb-2">
                            <label for="">descripcion</label>
                            <input type="text" class="form-control mb-2">
                            <router-link to="/" class="btn btn-secondary">Completar</router-link>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
