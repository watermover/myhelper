import React from 'react';
import ReactDOM from 'react-dom';
import { MainComp } from "./components/MainComp.jsx";
import { NavComp } from "./components/NavComp.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <div>
        <NavComp />
        <MainComp name="Test" />
    </div>,
    document.getElementById('app')
);