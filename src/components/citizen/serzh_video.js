import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="box">
                <header>
                    <div className="header-box">
                        <h1 className="">
                            WATCH HOW PROTESTERS SPEND A NIGHT AT THE FRENCH SQUARE<span>!</span>
                        </h1>
                    </div>
                </header>
                <main>
                    <section>
                        <div className="video-YouTube">
                            <iframe src="https://www.youtube.com/embed/UJ-0ZAl3XhI" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen="allowfullscreen" title="Velvet Revolution Cutscene"></iframe>
                        </div>
                        <div className="sub-section" style={{marginTop: "10px"}}>
                            <Link to="/citizen/dialer_serzh">
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
