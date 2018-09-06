import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="box">
                <header>
                    <div className="header-box">
                        <h1 className="">

                        </h1>
                    </div>
                </header>
                <main>
                    <section>
                        <div className="sub-section">
                            <Link to="../end/live_video">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        Serzh won’t  quit voluntarily. Let’s persuade him otherwise!
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="sub-section">
                            <Link to="../end/live_video">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        Our efforts seem futile & ineffective. Better retreat for now!
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
