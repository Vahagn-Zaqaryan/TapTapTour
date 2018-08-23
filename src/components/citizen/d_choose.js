import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="box">
                <header>
                    <div className="header-box">
                        <h1 className="">
                            Some Text<span>.</span>
                        </h1>
                    </div>
                </header>
                <main>
                    <section>
                        <div className="sub-section">
                            <Link to="d_choose/ppap">
                                <div className="buttonLink f-f--ourF">
                                    <span className="f-f--ourF">
                                        Agree & dont participate
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="sub-section">
                            <Link to="d_choose/ap">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        Agree, participate secretly
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="sub-section">
                            <Link to="d_choose/ap">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        Disagree & participate
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
