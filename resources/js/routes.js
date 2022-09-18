//estas son rutas del fronent, ver app.js en resources
const Home=()=> import('./components/Home.vue');
const Login=()=> import('./components/Login.vue');

const CreateClienteView=()=> import('./components/CrudClientes/CreateClienteView.vue');
const ShowClientesView=()=> import('./components/CrudClientes/ShowClientes.vue');
//no me gusta estar importando tantas cosas, pero francamente no se que mas hacer
const CreateRutasView=()=> import('./components/CrudRutas/CreateRutasView.vue');
const ShowRutasView=()=> import('./components/CrudRutas/ShowRutas.vue');




//esto es equivalente a poner lo que a continuacion se encuentra en app.js de resources: 
//Vue.component('login-component', require('./components/Login.vue').default);

export const routes=[
	{//damos un nombre, definimos la ruta e importamos las vistas
		name:'login',
		path:'/login',
		component:Login

	},
	{
		name:'home',
		path:'/',
		component:Home
	},
	{
		name:'sing-up',
		path:'/sing-up',
		component:CreateClienteView
	},
	{
		name:'rutasCrear',
		path:'/createrutas',
		component:CreateRutasView
	},
	{
		name:'clientes',
		path:'/clientes',
		component:ShowClientesView
	},
	{
		name:'rutas',
		path:'/showrutas',
		component:ShowRutasView
	}
]