import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="box">
                <header>
                    <div className="header-box">
                        <h1 className="">
                            Parliament Video<span>.</span>
                        </h1>
                    </div>
                </header>
                <main>
                    <section>
                        <div className="video-YouTube">
                            <iframe src="https://www.youtube.com/embed/y08R20KflNM" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen="allowfullscreen" title="Velvet Revolution Cutscene"></iframe>
                        </div>
                        <div className="sub-section" style={{marginTop: "10px"}}>
                            <Link to="join">
                                <div className="buttonLink f-f--ourF">
                                    <span className="f-f--ourF">
                                        I Watched It!
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
