import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="box">
                <header>
                    <div className="header-box">
                        <h1 className="">
                            Police Options<span>.</span>
                        </h1>
                    </div>
                </header>
                <main>
                    <section>
                        <div className="sub-section">
                            <Link to="./p_option/p_option_right">
                                <div className="buttonLink f-f--ourF">
                                    <span className="f-f--ourF">
                                        Get to the first line of protesters & march towards them
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="sub-section">
                            <Link to="./p_option/p_option_right">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        Go behind the main lines of marches
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="sub-section">
                            <Link to="./p_option/p_option_right">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        Wait at Yeritasardakan intersection
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
