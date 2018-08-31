import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="box">
                <header>
                    <div className="header-box">
                        <h1 className="">
                            In case of A, B, B<span>.</span>
                        </h1>
                        <p>
                            Some text if needed.
                        </p>
                    </div>
                </header>
                <main>
                    <section>
                        <div className="sub-section">
                            <Link to="siselect/velvet_revolution">
                                <div className="buttonLink f-f--ourF">
                                    <span className="f-f--ourF">
                                        Go to French Square
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="sub-section">
                            <Link to="./cac/scared">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        You’re scared, go home
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
