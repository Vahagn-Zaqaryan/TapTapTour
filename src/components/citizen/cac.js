import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="box">
                <header>
                    <div className="header-box">
                        <h1 className="">
                             WHAT WILL YOU DO<span>?</span>
                        </h1>
                        <p>
                            Nikol Pashinyan and several protesters are hurt by fragments from sound grenades! He urges everyone to join him in the French Square for an important announcement. Also, one of your friends texted you that he was hurt by a fragment too.
                        </p>
                    </div>
                </header>
                <main>
                    <section>
                        <div className="sub-section">
                            <Link to="../siselect/velvet_revolution">
                                <div className="buttonLink f-f--ourF">
                                    <span className="f-f--ourF">
                                        It’s time to spice things up. I’m going!
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="sub-section">
                            <Link to="./cac/bcall">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        I want to text my hurt friend, see how he’s doing!
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
