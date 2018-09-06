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
                            <Link to="text_option_img1">
                                <div className="buttonLink f-f--ourF">
                                    <span className="f-f--ourF">
                                        The Revolution is not over! I demand Nikol elected as PM ASAP!
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="sub-section">
                            <Link to="text_option_img2">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        I want to go celebrate in the Republic Square!
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
