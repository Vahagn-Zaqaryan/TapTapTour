import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="box">
                <header>
                    <div className="header-box">
                        <p>
                            Nikol Pashinyan is leading the protesters to block the French Square.
                        </p>
                        <h1 className="">
                            WHAT WILL YOU DO<span>?</span>
                        </h1>
                    </div>
                </header>
                <main>
                    <section>
                        <div className="sub-section">
                            <Link to="./to_fs">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        I will follow right after him!
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="sub-section">
                            <Link to="./to_fs">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        It’s safer if I walk behind the main crowd!
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="sub-section">
                            <Link to="./to_fs">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        I will play safe and follow news from home!
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
