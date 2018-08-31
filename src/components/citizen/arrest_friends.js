import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="box">
                <header>
                    <div className="header-box">
                        <h1 className="">
                            Pierce through police force<span>.</span>
                        </h1>
                        <p>
                            A few of your friends and protester peers are arrested by masked men
                        </p>
                    </div>
                </header>
                <main>
                    <section>
                        <div className="sub-section">
                            <Link to="./arrest_friends/congrats">
                                <div className="buttonLink f-f--ourF">
                                    <span className="f-f--ourF">
                                        Talk to reporter
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="sub-section">
                            <Link to="./arrest_friends/congrats">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        Try to free them
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="sub-section">
                            <Link to="./arrest_friends/congrats">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        Talk to leaders of movement
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="sub-section">
                            <Link to="./arrest_friends/congrats">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        Do nothing & keep protesting
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
