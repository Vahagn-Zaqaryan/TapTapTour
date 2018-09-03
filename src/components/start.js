import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="box">
                <header>
                    <div className="header-box">
                        <h1 className="">
                            PICK YOUR DIFFICULTY LEVEL<span>!</span>
                        </h1>
                        <p>
                            The harder the level, the harder the stories and challenges you will face.
                        </p>
                    </div>
                </header>
                <main>
                    <section>
                        <div className="sub-section">
                            <Link to="citizen">
                                <div className="buttonLink f-f--ourF">
                                    <span className="f-f--ourF">
                                        Citizen
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="sub-section">
                            <Link to="">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        Activist (Complete Citizen 1st)
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="sub-section">
                            <Link to="">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        Politician (Complete  Activist 1st)
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
