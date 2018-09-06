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
                            As you are resting in the comfort and safety of your home (-_-) you are planning your next move.
                        </p>
                    </div>
                </header>
                <main>
                    <section>
                        <div className="sub-section">
                            <Link to="./live_video">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        Let’s watch what’s going on in the city!
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="sub-section">
                            <Link to="../end/live_video">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        I want to experience it first hand!
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
