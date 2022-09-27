//estas son rutas del fronent, ver app.js en resources
const Home=()=> import('./components/Home.vue');
const Login=()=> import('./components/Login.vue');

//-----------------------cliente--------------------------------------------

const CreateClienteView=()=> import('./components/CrudClientes/CreateClienteView.vue');
const ShowClientesView=()=> import('./components/CrudClientes/ShowClientes.vue');


//no me gusta estar importando tantas cosas, pero francamente no se que mas hacer

//-----------------------ruta--------------------------------------------

const CreateRutasView=()=> import('./components/CrudRutas/CreateRutasView.vue');
const ShowRutasView=()=> import('./components/CrudRutas/ShowRutas.vue');
const EditRutasView=()=> import('./components/CrudRutas/EditRutasView.vue');

//-----------------------pasaje--------------------------------------------
const CreatePasajesView=()=> import('./components/pasaje/CreatePasajeView.vue');

//-----------------------empleado---------------------------------------------

const CreateEmpleadoView=()=> import('./components/CrudEmpleados/CreateEmpleadosView.vue');

//-----------------------buses---------------------------------------------
const CreateBusesView=()=> import('./components/CrudBuses/CreateBusesView.vue');

//-----------------------novedad---------------------------------------------
const CreateNovedadView=()=> import('./components/novedad/CreateNovedadView.vue');




//esto es equivalente a poner lo que a continuacion se encuentra en app.js de resources: 
//Vue.component('login-component', require('./components/Login.vue').default);

export const routes=[
	{
		name:'home',
		path:'/',
		component:Home
	},
	{//damos un nombre, definimos la ruta e importamos las vistas
		name:'login',
		path:'/login',
		component:Login

	},
//----------crud clientes--------------------
	{
		name:'clientesCrear',
		path:'/createcliente',
		component:CreateClienteView
	},
	{
		name:'clientes',
		path:'/clientes',
		component:ShowClientesView
	},
//----------crud rutas-------------------------	
	{
		name:'rutasCrear',
		path:'/createrutas',
		component:CreateRutasView
	},
	{
		name:'rutas',
		path:'/showrutas',
		component:ShowRutasView
	},
	{
		name:'rutasEditar',
		path:'/editar/:id',
		component:EditRutasView

	},
//-------crud empleados------------------------
	{
		name:'empleadosCrear',
		path:'/createempleado',
		component:CreateEmpleadoView

	},

//-------crud pasajes-------------------------
	{
		name:'pasajeCrear',
		path:'/createPasaje',
		component:CreatePasajesView

	},

//--------crud buses--------------------------
	{
		name:'busesCrear',
		path:'/createBuses',
		component:CreateBusesView

	},

//--------crud novedad--------------------------
	{
		name:'novedadCrear',
		path:'/createnovedad',
		component:CreateNovedadView

	},
]