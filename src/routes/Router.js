// routes/Routers.js

import React from 'react'
import {
        BrowserRouter,
        Routes,
        Route
    } from "react-router-dom";
import NavBar from '../components/NavBar';
import App from '../containers/App';
import NewMotorcycle from '../containers/NewMotorcycle';



const Router = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<App />} />
                <Route exact path="/new" element={<NewMotorcycle />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
