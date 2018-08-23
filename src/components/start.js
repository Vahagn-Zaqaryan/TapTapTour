import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="box">
                <header>
                    <div className="header-box">
                        <h1 className="">
                            Choose Difficulty Level<span>.</span>
                        </h1>
                    </div>
                </header>
                <main>
                    <section>
                        <div className="sub-section">
                            <div className="buttonLink f-f--ourF">
                                <Link to="citizen">
                                    <span className="f-f--ourF">
                                        Citizen
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className="sub-section">
                            <div className="buttonLink">
                                <Link to="">
                                    <span className="f-f--ourF">
                                        Activist
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className="sub-section">
                            <div className="buttonLink">
                                <Link to="">
                                    <span className="f-f--ourF">
                                        Politician
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        );
    }
}

export default App;
