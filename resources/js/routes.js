//estas son rutas del fronent, ver app.js en resources
const Home=()=> import('./components/Home.vue');
const Login=()=> import('./components/Login.vue');
const Register=()=> import('./components/Register.vue');
const Regist=()=> import('./components/Regist.vue');
const CreateRutasView=()=> import('./components/CrudRutas/CreateRutasView.vue');
const ShowRutasView=()=> import('./components/CrudRutas/ShowRutas.vue');
import Dashboard from './components/Dashboard';

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
		name:'R',
		path:'/R',
		component:Register
	},
	{
		name:'registration',
		path:'/registration',
		component:Regist
	},
	{
		name:'Mostrar Rutas',
		path:'/ShowRutas',
		component:ShowRutasView
	},
	{
		path: "/dashboard",
		name: "Dashboard",
		component: Dashboard,
	    beforeEnter: (to, form, next) =>{
		   axios.get('/api/athenticated').then(()=>{
			   next()
		   }).catch(()=>{
			   return next({ name: 'login'})
		   })
	   }
   
	  }
	
]