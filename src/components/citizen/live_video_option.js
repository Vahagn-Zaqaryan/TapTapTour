import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="box">
                <header>
                    <div className="header-box">
                        <h1 className="">
                            April 22 Nikol & Serzh negotiations fail<span>.</span>
                        </h1>
                    </div>
                </header>
                <main>
                    <section>
                        <div className="sub-section">
                            <Link to="../end/live_video">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        Go protest with Nikol
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="sub-section">
                            <Link to="../end/live_video">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        Go home, it’s useless
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
