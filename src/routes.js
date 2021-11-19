import Home from './pages/Home/Home'
import Registartion from './pages/Registartion/Registartion'
import SignIn from './pages/SignIn/SignIn'


export const routes = [
  {
    isExact: true,
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/registartion',
    name: 'Registartion',
    component: Registartion
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
];