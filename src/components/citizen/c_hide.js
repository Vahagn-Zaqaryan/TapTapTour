import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Map from './map.jpg';

class App extends Component {
    render() {
        return (
            <div className="box">
                <header>
                    <div className="header-box">
                        <h1 className="">
                        AVOID STANDING IN THE CAMERA RADIUS<span>!  </span>
                        </h1>
                        <p>
                            The news media position their cameras on the top left and right parts of the stage.
                        </p>
                    </div>
                </header>
                <main>
                    <section>
                    <div className="sub-section">
                        <Link to="s_quest">
                            <div className="buttonLink">
                                <span className="f-f--ourF">
                                    Mission Accomplished!
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
