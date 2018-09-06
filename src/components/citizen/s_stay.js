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
                            Capturing the French Square was a piece of cake. Now the protesters need to occupy it at night.
                        </p>
                    </div>
                </header>
                <main>
                    <section>
                        <div className="sub-section">
                            <Link to="./serzh_video">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        I want to spend the night at French Square!
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="sub-section">
                            <Link to="./ppap">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        April is cold in Yerevan. I’ll go home and join in the morning!
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
