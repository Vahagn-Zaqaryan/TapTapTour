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
                            <Link to="./scared">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        The danger is still there. Retreat for now!
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="sub-section">
                            <Link to="../siselect/velvet_revolution">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        Now I can go to French Square in Peace!
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
