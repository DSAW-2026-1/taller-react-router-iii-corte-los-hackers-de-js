import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ContactComponent from './components/ContactUs.tsx'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AboutComponent from './components/AboutUs.tsx'
import UserComponent from './components/User.tsx'
import NavBar from './components/Navigation.tsx'
import NotFoundComponent from './components/NotFound.tsx'
import Login from './components/Login.tsx'
import PrivateRoutes from './components/PrivateRoutes.tsx'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/login" element={<Login />}/>
            <Route element={<PrivateRoutes/>}>
                <Route path="/" element={<App />} />
                <Route path="/about" element={<AboutComponent />} />
                <Route path="/contact" element={<ContactComponent />} />
                <Route path="/users/:id" element={<UserComponent />} />
            </Route>

            {/*404 HAS TO BE LAST!!!*/}
            <Route path="*" element={<NotFoundComponent />} />
        </Routes>
    </BrowserRouter>,
)
