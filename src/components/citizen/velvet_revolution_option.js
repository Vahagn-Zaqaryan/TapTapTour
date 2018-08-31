import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="box">
                <header>
                    <div className="header-box">
                        <h1 className="">
                            In case of A B B A B<span>.</span>
                        </h1>
                        <p>
                            Some text if needed.
                        </p>
                    </div>
                </header>
                <main>
                    <section>
                        <div className="sub-section">
                            <Link to="option/imgstreets">
                                <div className="buttonLink f-f--ourF">
                                    <span className="f-f--ourF">
                                        Block streets
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="sub-section">
                            <Link to="option/imgmetro">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        Disturb metro traffic
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
