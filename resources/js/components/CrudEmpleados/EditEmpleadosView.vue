<template>
    <div class="container mt-4">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card text-white bg-dark">
                    <div class="card-header">Ingrese</div>

                    <div class="card-body">
                        <form action="">
                            
                            <label for="">Nombre Completo</label>
                            <input type="text"  v-model="form.name" class="form-control mb-2" placeholder="Nombre y Apellido">
                            <label for="">Email</label>
                            <input type="email"  v-model="form.email" class="form-control mb-2" placeholder="Email">
                            <label for="">Cedula</label>
                            <input type="text"  v-model="form.cedula" class="form-control mb-2" placeholder="Cedula">
                            
                            <button  class="btn btn-secondary">Guardar</button>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>