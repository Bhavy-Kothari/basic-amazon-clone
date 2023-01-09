import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import Product from './components/Product/Product';

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route path="/product" element={<Home />} />
                    <Route path="/product/:id" element={<Product />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default App;