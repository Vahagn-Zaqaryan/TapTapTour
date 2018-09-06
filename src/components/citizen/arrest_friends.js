import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="box">
                <header>
                    <div className="header-box">
                        <h1 className="">
                            WHAT WILL YOU DO<span>?</span>
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
                                        I will find a reporter and him what I saw!
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="sub-section">
                            <Link to="./arrest_friends/congrats">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        “They have done nothing illegal, let them go!”
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="sub-section">
                            <Link to="./arrest_friends/congrats">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        I will find an activist leading the protest and notify them!
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="sub-section">
                            <Link to="./arrest_friends/congrats">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        There is not much I can change. My job is to protest!
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
