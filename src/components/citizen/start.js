import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
    handleCall() {
        this.props.audioPlay();
    }
    render() {
        return (
            <div className="box">
                <header>
                    <div className="header-box">
                        <h1 className="">
                            Watch this Video<span>.</span>
                        </h1>
                    </div>
                </header>
                <main>
                    <section>
                        <div className="video-YouTube">
                            <iframe src="https://www.youtube.com/embed/6oQUvMEK8oE" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen="allowfullscreen" title="Velvet Revolution Cutscene"></iframe>
                        </div>
                        <div className="sub-section" style={{marginTop: "10px"}}>
                            <div className="buttonLink f-f--ourF" onClick={this.handleCall.bind(this)}>
                                <Link to="/citizen/dialer">
                                    <span className="f-f--ourF">
                                        Continue
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        );
    }
}

export default App;
