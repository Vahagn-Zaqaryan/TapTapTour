import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="box">
                <header>
                    <div className="header-box">
                        <h1 className="">
                            Some Text Again<span>.</span>
                        </h1>
                    </div>
                </header>
                <main>
                    <section>
                        <div className="sub-section">
                            <Link to="s_stay">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        March towards freedom square in front rows
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="sub-section">
                            <Link to="s_stay">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        Tag along behind your new friends
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="sub-section">
                            <Link to="./ppap">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        Go home
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
