import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="box">
                <header>
                    <div className="header-box">
                        <h1 className="">
                            In case of A Nikol is not elected as PM the first time<span>.</span>
                        </h1>
                        <p>
                            Ask the Parliament to elect Nikol as Prime Minister
                        </p>
                    </div>
                </header>
                <main>
                    <section>
                        <div className="sub-section">
                            <Link to="text_end_choose">
                                <div className="buttonLink f-f--ourF">
                                    <span className="f-f--ourF">
                                        Protest at Republic Square
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="sub-section">
                            <Link to="text_end_text">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        Text parents- tell them hope is lost, but they cheer you up, because they were inspired by your actions and want to join you!
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
