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
                            <Link to="ppap1">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        Watch how protesters will block the French Square
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="sub-section">
                            <Link to="s_quest">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        Go join blocking protesters in French Square
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
