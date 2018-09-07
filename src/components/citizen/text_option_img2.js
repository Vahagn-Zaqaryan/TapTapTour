import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Map from '../../img/img_2s.jpg';

class App extends Component {
    render() {
        return (
            <div className="box">
                <header>
                    <div className="header-box">
                        <h1 className="">
                            MARCH TO REPUBLIC SQUARE! JOIN THE HUNDREDS OF THOUSANDS OF CITIZENS IN CELEBRATION<span>!</span>
                        </h1>
                    </div>
                </header>
                <main>
                    <section>
                    <div className="sub-section">
                        <Link to="text_end_choose">
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
