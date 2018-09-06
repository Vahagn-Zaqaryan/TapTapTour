import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="box">
                <header>
                    <div className="header-box">
                        <h1 className="">
                            WHAT WILL YOU DO AT THIS POINT<span>?!</span>
                        </h1>
                        <p>
                            Nikol Pashinyan and other Members of Parliament are illegally kidnapped by the police! Many protesters are arrested too!
                        </p>
                    </div>
                </header>
                <main>
                    <section>
                        <div className="sub-section">
                            <Link to="text">
                                <div className="buttonLink f-f--ourF">
                                    <span className="f-f--ourF">
                                        I am demanding Nikol and these people are freed! It’s on!
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="sub-section">
                            <Link to="text">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        Shit has just hit the fan! I’m out of here for now at least!
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
