import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Map from '../../img/img_1s.jpg';

class App extends Component {
    render() {
        return (
            <div className="box">
                <header>
                    <div className="header-box">
                        <h1 className="">
                            WALK TOWARDS YOUR REVOLUTIONARY JOURNEY<span>!</span>
                        </h1>
                        <p>
                            This is the Prime Minister's residence. You and your fellow citizens demand that Nikol Pashinyan is elected.
                        </p>
                    </div>
                </header>
                <main>
                    <section>
                    <div className="sub-section">
                        <Link to="text_end">
                            <div className="buttonLink">
                                <span className="f-f--ourF">
                                    OK
                                </span>
                            </div>
                        </Link>
                    </div>
                        <div className="image-Source">
                            <img src={Map} alt="Map"/>
                        </div>
                    </section>
                </main>
            </div>
        );
    }
}

export default App;
