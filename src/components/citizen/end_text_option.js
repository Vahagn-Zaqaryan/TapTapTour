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
                            Ask the Parliament to elect Nikol as Prime Minister
                        </p>
                    </div>
                </header>
                <main>
                    <section>
                        <div className="sub-section">
                            <Link to="text_option_img1">
                                <div className="buttonLink f-f--ourF">
                                    <span className="f-f--ourF">
                                        Ask the Parliament to elect Nikol as Prime Minister
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="sub-section">
                            <Link to="text_option_img2">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        go celebrate in Republic Square
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
