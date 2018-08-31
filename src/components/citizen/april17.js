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
                            April 17<span>.</span>
                        </h1>
                        <p>
                         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                </header>
                <main>
                    <section>
                    <div className="sub-section">
                        <Link to="./april17/asap">
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
