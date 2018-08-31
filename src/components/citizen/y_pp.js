import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="box">
                <header>
                    <div className="header-box">
                        <h1 className="">
                            Some Text (Alpha v1.0)<span>.</span>
                        </h1>
                    </div>
                </header>
                <main>
                    <section>
                        <div className="sub-section">
                            <Link to="./p_option/p_option_right">
                                <div className="buttonLink f-f--ourF">
                                    <span className="f-f--ourF">
                                        Join ASAP
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="sub-section">
                            <Link to="./p_option/fri_arr_live">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        Watch Live
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="sub-section">
                            <Link to="./p_option/text_pp">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        Text your friends & cell them back
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
