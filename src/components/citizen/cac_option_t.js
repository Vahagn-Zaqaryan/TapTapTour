import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="box">
                <header>
                    <div className="header-box">
                        <h1 className="">
                            Text a friend who was hurt by frag grenade<span>.</span>
                        </h1>
                    </div>
                </header>
                <main>
                    <section>
                        <div className="sub-section">
                            <Link to="./scared">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        Stay home
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="sub-section">
                            <Link to="../siselect/velvet_revolution">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        Join people in French square
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
