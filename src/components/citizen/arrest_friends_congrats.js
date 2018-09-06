import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="box">
                <header>
                    <div className="header-box">
                        <h1 className="">
                            GOOD JOB<span>!</span>
                        </h1>
                        <p>
                         Thanks to your actions, those people were let out from jail in less than 1 day!                   </p>
                    </div>
                </header>
                <main>
                    <section>
                        <div className="sub-section">
                            <Link to="../april17">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        Continue Button!
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
