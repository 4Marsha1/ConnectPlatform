import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './containers/Landing';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    exact
                    element={<Landing />}
                    key='route-landing-screen'
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
