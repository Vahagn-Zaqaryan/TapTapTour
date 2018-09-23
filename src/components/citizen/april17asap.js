import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="box">
                <header>
                    <div className="header-box">
                        <p>
                            The Parliament will hold a vote to elect Serzh Sargsyan. Nikol Pashinyan leads the protesters to block the Parliament, so the elections won’t happen.
                        </p>
                        <h1 className="">
                            WHAT WILL YOU DO<span>?</span>
                        </h1>
                    </div>
                </header>
                <main>
                    <section>
                        <div className="sub-section">
                            <Link to="../siselectprevideo">
                                <div className="buttonLink f-f--ourF">
                                    <span className="f-f--ourF">
                                        Without any doubt, I will march to the Parliament!
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="sub-section">
                            <Link to="../siselectprevideo2">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        I will take the metro. It’s faster for me!
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="sub-section">
                            <Link to="../siselectprevideo3">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        The crowd won’t miss one person. I’ll hold back!
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
