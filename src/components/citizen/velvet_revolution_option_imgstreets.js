import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Map from '../../img/img1.jpg';

class App extends Component {
    render() {
        return (
            <div className="box">
                <header>
                    <div className="header-box">
                        <h1 className="">
                            CONGRATULATIONS<span>!</span>
                        </h1>
                        <p>
                            You have successfully blocked a street intersection! It’s inconvenient for some people, but you are getting rid of a bigger inconvenience! (Serzh Sargsyan)
                        </p>
                    </div>
                </header>
                <main>
                    <section>
                    <div className="sub-section">
                        <Link to="./text">
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
