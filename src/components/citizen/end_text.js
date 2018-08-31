import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="box">
                <header>
                    <div className="header-box">
                        <h1 className="">
                            Nikol, Sasun & Ararat<span>.</span>
                        </h1>
                        <p>
                            Hello Bro
                        </p>
                    </div>
                </header>
                <main>
                    <section>
                        <div className="sub-section" style={{marginTop: "10px"}}>
                            <Link to="text_option">
                                <div className="buttonLink f-f--ourF">
                                    <span className="f-f--ourF">
                                        Continue
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
