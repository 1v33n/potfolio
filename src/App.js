import './App.css';
import MainPage from './pages/MainPage';
import React from 'react';
import DocumentsPage from './pages/DocumentsPage';
import {
  Routes,
  Route,
} from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route  path = "/"           element = { <MainPage/> } /> 
            <Route  path = "/documents"  element = { <DocumentsPage/> } /> 
        </Routes>
    </BrowserRouter>   
  );
}

export default App;
