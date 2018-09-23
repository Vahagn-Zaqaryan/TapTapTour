import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="box">
                <header>
                    <div className="header-box">
                        <p>
                            Nikol Pashinyan urges everyone to join him in the French Square for a very important announcement!
                        </p>
                        <h1 className="">
                            WHAT WILL YOU DO<span>?</span>
                        </h1>
                    </div>
                </header>
                <main>
                    <section>
                        <div className="sub-section">
                            <Link to="siselect/velvet_revolution">
                                <div className="buttonLink f-f--ourF">
                                    <span className="f-f--ourF">
                                        It’s time to spice things up. I’m going!
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="sub-section">
                            <Link to="./cac/scared">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        It’s a bit dangerous. Retreat for now!
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
