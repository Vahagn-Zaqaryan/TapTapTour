import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Map from './map.jpg';

class App extends Component {
    render() {
        return (
            <div className="box">
                <header>
                    <div className="header-box">
                        <h1 className="">
                            <span>SORRY! JUST PRESS OK</span>
                        </h1>
                    </div>
                </header>
                <main>
                    <section>
                    <div className="sub-section">
                        <Link to="p_option">
                            <div className="buttonLink">
                                <span className="f-f--ourF">
                                    OK
                                </span>
                            </div>
                        </Link>
                    </div>
                    </section>
                </main>
            </div>
        );
    }
}

export default App;
