import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class App extends Component {
    render() {
        return (
            <div className="box">
                <header>
                    <div className="header-box">
                        <h1 className="">
                            TEXT YOUR FRIEND ANNA, WHO WAS HURT BY A FRAGMENT FROM A GRENADE<span>!</span>
                        </h1>
                    </div>
                </header>
                <main>
                    <section>
                        <div className="textBox">
                            <textarea placeholder="Text Here..."></textarea>
                        </div>
                        <div className="sub-section">
                            <Link to="./optiont">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        Send
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
