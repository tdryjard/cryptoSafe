import { lazy } from 'react'
import Login from './components/login/Login'

const HomePage = lazy(() => import('./view/HomePage'))

const RouteList = [
  { path: "/",    component: HomePage },
  { exact: true, path: "/login",    component: Login }
]


export default RouteList