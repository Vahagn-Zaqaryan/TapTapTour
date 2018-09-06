import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="box">
                <header>
                    <div className="header-box">
                        <h1 className="">
                            LISTEN TO WHAT HE PROPOSES<span>!</span>
                        </h1>
                        <p>
                            Nikol Pashinyan announces that we are starting a peaceful Velvet Revolution and challenges the you to take action!
                        </p>
                    </div>
                </header>
                <main>
                    <section>
                        <div className="video-YouTube">
                            <iframe src="https://www.youtube.com/embed/hxK-bctfHPo" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen="allowfullscreen" title="Velvet Revolution Cutscene"></iframe>
                        </div>
                        <div className="sub-section" style={{marginTop: "10px"}}>
                            <Link to="velvet_revolution/option">
                                <div className="buttonLink f-f--ourF">
                                    <span className="f-f--ourF">
                                        Continue
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
