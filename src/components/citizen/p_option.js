import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="box">
                <header>
                    <div className="header-box">
                        <p>
                            A protester spotted special police forces moving in your direction. Nikol Pashinyan urges everyone to show non-violent resistance to the police.
                        </p>
                        <h1 className="">
                            WHAT WILL YOU DO<span>?</span>
                        </h1>
                    </div>
                </header>
                <main>
                    <section>
                        <div className="sub-section">
                            <Link to="./p_option/p_option_right">
                                <div className="buttonLink f-f--ourF">
                                    <span className="f-f--ourF">
                                        Bring it on! It’s time to face the police!
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="sub-section">
                            <Link to="./p_option/p_option_right">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        It’s safer if I walk behind the main crowd!
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="sub-section">
                            <Link to="./p_option/p_option_right">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        I would rather wait and see how this goes!
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
