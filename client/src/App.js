import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './redux/store';
import PrivateRoute from './containers/PrivateRoute';
import InvertedPrivateRoute from './containers/InvertedPrivateRoute';
import Landing from './containers/Landing';
import Navbar from './components/Navbar';
import Register from './containers/Register';
import Login from './containers/Login';
import Dashboard from './containers/Dashboard';
import CreateProfile from './containers/CreateProfile';
import Alert from './components/Alert';
import EditProfile from './containers/EditProfile';
import Experiences from './containers/Experiences';
import Educations from './containers/Educations';
import Profiles from './containers/Profiles';
import Profile from './containers/Profile';
import Posts from './containers/Posts';

const App = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Navbar
                    isSidebarOpen={isSidebarOpen}
                    toggleSidebar={toggleSidebar}
                />
                <Alert />
                <Routes>
                    <Route exact path='/' element={<InvertedPrivateRoute />}>
                        <Route
                            path='/'
                            exact
                            element={<Landing />}
                            key='route-landing-screen'
                        />
                    </Route>
                    <Route
                        exact
                        path='/developers'
                        element={<Profiles />}
                        key='route-profiles-screen'
                    />
                    <Route
                        exact
                        path='/developers/:id'
                        element={<Profile />}
                        key='route-profile-screen'
                    />
                    <Route exact path='/register' element={<InvertedPrivateRoute />}>
                        <Route
                            path='/register'
                            exact
                            element={<Register />}
                            key='route-register-screen'
                        />
                    </Route>
                    <Route exact path='/login' element={<InvertedPrivateRoute />}>
                        <Route
                            path='/login'
                            exact
                            element={<Login />}
                            key='route-login-screen'
                        />
                    </Route>
                    <Route exact path='/dashboard' element={<PrivateRoute />}>
                        <Route
                            path='/dashboard'
                            exact
                            element={<Dashboard />}
                            key='route-dashboard-screen'
                        />
                    </Route>
                    <Route exact path='/posts' element={<PrivateRoute />}>
                        <Route
                            path='/posts'
                            exact
                            element={<Posts />}
                            key='route-posts-screen'
                        />
                    </Route>
                    <Route exact path='/create-profile' element={<PrivateRoute />}>
                        <Route
                            path='/create-profile'
                            exact
                            element={<CreateProfile />}
                            key='route-create-profile-screen'
                        />
                    </Route>
                    <Route exact path='/edit-profile' element={<PrivateRoute />}>
                        <Route
                            path='/edit-profile'
                            exact
                            element={<EditProfile />}
                            key='route-edit-profile-screen'
                        />
                    </Route>
                    <Route exact path='/add-experience' element={<PrivateRoute />}>
                        <Route
                            path='/add-experience'
                            exact
                            element={<Experiences />}
                            key='route-add-experience-screen'
                        />
                    </Route>
                    <Route exact path='/add-education' element={<PrivateRoute />}>
                        <Route
                            path='/add-education'
                            exact
                            element={<Educations />}
                            key='route-add-education-screen'
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
