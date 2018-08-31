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
                            <Link to="./y_choose/ap">
                                <div className="buttonLink f-f--ourF">
                                    <span className="f-f--ourF">
                                        Join by walking
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="sub-section">
                            <Link to="./y_choose/ap">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        Take the metro to Yeritasardakan
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="sub-section">
                            <Link to="./y_choose/pp">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        Watch live video
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
