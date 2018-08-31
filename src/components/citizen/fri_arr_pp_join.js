import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="box">
                <header>
                    <div className="header-box">
                        <h1 className="">
                            Parliament Video then this option<span>.</span>
                        </h1>
                    </div>
                </header>
                <main>
                    <section>
                        <div className="sub-section">
                            <Link to="../../../cac">
                                <div className="buttonLink f-f--ourF">
                                    <span className="f-f--ourF">
                                        Watch live from home
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="sub-section">
                            <Link to="../../../siselectprevideo">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        Join in
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="sub-section">
                            <Link to="../../../cac">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        Send a disconraging text message to friends
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
