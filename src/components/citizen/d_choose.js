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
                            <div className="buttonLink f-f--ourF">
                                <Link to="d_choose/ppap">
                                    <span className="f-f--ourF">
                                        Agree & dont participate
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className="sub-section">
                            <div className="buttonLink">
                                <Link to="d_choose/ap">
                                    <span className="f-f--ourF">
                                        Agree, participate secretly
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className="sub-section">
                            <div className="buttonLink">
                                <Link to="d_choose/ap">
                                    <span className="f-f--ourF">
                                        Disagree & participate
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        );
    }
}

export default App;
