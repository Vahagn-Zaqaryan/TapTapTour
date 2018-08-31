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
                            <Link to="./fri_arr_pp/congrats">
                                <div className="buttonLink f-f--ourF">
                                    <span className="f-f--ourF">
                                        Call the police and inquire about their whereabouts
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="sub-section">
                            <Link to="./fri_arr_pp/congrats">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        Write to human rights defender
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="sub-section">
                            <Link to="../../arrest_friends/congrats">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        Go join protests to show your anger
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
