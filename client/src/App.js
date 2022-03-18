import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './containers/Landing';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Register from './containers/Register';
import Login from './containers/Login';

const App = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }
    return (
        <BrowserRouter>
            <Navbar
                isSidebarOpen={isSidebarOpen}
                toggleSidebar={toggleSidebar}
            />
            <Routes>
                <Route
                    path='/'
                    exact
                    element={<Landing />}
                    key='route-landing-screen'
                />
                <Route
                    path='/register'
                    exact
                    element={<Register />}
                    key='route-register-screen'
                />
                <Route
                    path='/login'
                    exact
                    element={<Login />}
                    key='route-login-screen'
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
