import { lazy } from 'react'
import Login from './components/login/Login'
import HomePage from './view/HomePage'

const RouteList = [
  { exact: true, path: "/",    component: HomePage },
  { path: "/login",    component: Login }
]


export default RouteList