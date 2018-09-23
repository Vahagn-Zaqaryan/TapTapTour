import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="box">
                <header>
                    <div className="header-box">
                        <h1 className="">
                            WALK DOWN TO THE PARLIAMENT BUILDING ON BAGHRAMYAN STREET<span>.</span> <br/>
                            ONCE YOU ARE IN FRONT OF THE PARLIAMENT,WATCH THE LIVE VIDEO OF HOW THE PROTESTERS FACE THE POLICE IN FRONT OF THE PARLIAMENT BUILDING<span>!</span>
                        </h1>
                    </div>
                </header>
                <main>
                    <section>
                        <div className="video-YouTube">
                            <iframe src="https://www.youtube.com/embed/FXq0k5kSLOg" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen="allowfullscreen" title="Velvet Revolution Cutscene"></iframe>
                        </div>
                        <div className="sub-section" style={{marginTop: "10px"}}>
                            <Link to="./cac">
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
