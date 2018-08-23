import React, { Component } from 'react';
import './css/style.min.css';
import './css/tss.min.css';
import { Route } from 'react-router-dom';
import Main from './pages/main';

class App extends Component {
    render() {
        return (
            <div className="application">
                <Main/>
            </div>
        );
    }
}

export default App;
