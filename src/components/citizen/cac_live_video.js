import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="box">
                <header>
                    <div className="header-box">
                        <h1 className="">
                            WATCH HOW THE REVOLUTION CATCHES ON FIRE<span>!</span>
                        </h1>
                        <p>
                            The newly elected Prime Minister Serzh Sargsyan has agreed to negotiate with Nikol Pashinyan. Various news media are covering the event.
                        </p>
                    </div>
                </header>
                <main>
                    <section>
                        <div className="video-YouTube">
                            <iframe src="https://www.youtube.com/embed/xgrGeA-st0I" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen="allowfullscreen" title="Velvet Revolution Cutscene"></iframe>
                        </div>
                        <div className="sub-section" style={{marginTop: "10px"}}>
                            <Link to="live_video_option">
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
