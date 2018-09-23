import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="box">
                <header>
                    <div className="header-box">
                        <h1 className="">
                            GO TO FREEDOM SQUARE of OPERA<span>!</span>
                        </h1>
                        <p>
                            Once you are there, <b>WHAT WILL YOU DO?</b>
                        </p>
                    </div>
                </header>
                <main>
                    <section>
                        <div className="sub-section">
                            <Link to="c_hide">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        I must hide from the cameras! (Dad might watch me on the news)
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="sub-section">
                            <Link to="ppap">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        I’m not scared. I’m standing close to the stage!
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
