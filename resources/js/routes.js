//estas son rutas del fronent, ver app.js en resources
const Home=()=> import('./components/Home.vue');
const Login=()=> import('./components/Login.vue');

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
	}
]