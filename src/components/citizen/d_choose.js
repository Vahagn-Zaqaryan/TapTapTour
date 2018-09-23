import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="box">
                <header>
                    <div className="header-box">
                        <h1 className="">
                            WHAT WILL YOU DO<span>?</span>
                        </h1>
                        <p>
                            Your dad seems worried about you joining the protests.
                        </p>
                    </div>
                </header>
                <main>
                    <section>
                        <div className="sub-section">
                            <Link to="d_choose/ppap">
                                <div className="buttonLink f-f--ourF">
                                    <span className="f-f--ourF">
                                        He’s right, it’s dangerous!
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="sub-section">
                            <Link to="d_choose/ap">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        I will participate secretly!
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="sub-section">
                            <Link to="d_choose/ap">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        My life. My rules. I’m doing it!
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
