//estas son rutas del fronent, ver app.js en resources
const Home=()=> import('./components/Home.vue');
const Login=()=> import('./components/Login.vue');

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