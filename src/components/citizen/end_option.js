import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="box">
                <header>
                    <div className="header-box">
                        <h1 className="">
                            Nikol & Sasun Ararat arrested<span>.</span>
                        </h1>
                        <p>
                            Some text if needed.
                        </p>
                    </div>
                </header>
                <main>
                    <section>
                        <div className="sub-section">
                            <Link to="text">
                                <div className="buttonLink f-f--ourF">
                                    <span className="f-f--ourF">
                                        Demand that Nikol must be freed on the streets
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="sub-section">
                            <Link to="text">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        Go home, it’s dangerous now, follow news
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
