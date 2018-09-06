import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="box">
                <header>
                    <div className="header-box">
                        <h1 className="">
                            PEOPLE ARE AGITATED BY THIS. WHAT WILL YOU DO<span>?</span>
                        </h1>
                        <p>
                            In case of A The Parliament has a Republican Majority. None of its Members vote for Nikol Pashinyan. He is not elected as the Prime Minister!
                        </p>
                    </div>
                </header>
                <main>
                    <section>
                        <div className="sub-section">
                            <Link to="text_end_choose">
                                <div className="buttonLink f-f--ourF">
                                    <span className="f-f--ourF">
                                        I will protest until I get what I want! Nikol as PM!!
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="sub-section">
                            <Link to="text_end_text">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        I will contact my parents. They were right afterall! :(
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
