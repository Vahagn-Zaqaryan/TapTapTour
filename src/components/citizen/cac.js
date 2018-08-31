import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="box">
                <header>
                    <div className="header-box">
                        <h1 className="">
                            In case of C, A, C<span>.</span>
                        </h1>
                    </div>
                </header>
                <main>
                    <section>
                        <div className="sub-section">
                            <Link to="../siselect/velvet_revolution">
                                <div className="buttonLink f-f--ourF">
                                    <span className="f-f--ourF">
                                        Join the people in French square
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="sub-section">
                            <Link to="./cac/bcall">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                    Text a friend who was hurt by frag grenade
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="sub-section">
                            <Link to="./cac/scared">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        Stay home, you’re scared for your safety
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
