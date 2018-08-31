import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="box">
                <header>
                    <div className="header-box">
                        <h1 className="">
                            Join protesters<span>.</span>
                        </h1>
                        <p>
                            Some text if needed.
                        </p>
                    </div>
                </header>
                <main>
                    <section>
                        <div className="sub-section">
                            <Link to="../siselectprevideo">
                                <div className="buttonLink f-f--ourF">
                                    <span className="f-f--ourF">
                                        March to the live protests as soon as possible
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="sub-section">
                            <Link to="../siselectprevideo">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        Tag along behind the front lines
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="sub-section">
                            <Link to="../cac">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        Go home
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
