import { Navigate, Outlet } from 'react-router-dom'
export default function PrivateRoutes(){
    let auth = {'token':localStorage.getItem('token')}
    return (
        auth.token ? <Outlet/> : <Navigate to='/login'/>
    )
}