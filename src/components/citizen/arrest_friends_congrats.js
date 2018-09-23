import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="box">
                <header>
                    <div className="header-box">
                        <p>
                            Thanks to your actions, those people were let out from jail in less than 1 day!
                        </p>
                        <h1 className="">
                            AMAZING JOB<span>!</span>
                        </h1>
                    </div>
                </header>
                <main>
                    <section>
                        <div className="sub-section">
                            <Link to="../april17/asap">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        Let's Move on
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
