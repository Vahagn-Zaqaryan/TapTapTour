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
                            Message from Parents<span>!</span>
                        </h1>
                        <p>
                            Your brother told us that you have been protesting secretly. We’re not angry with you actually. We are inspired by you and your generation who want our country to change and become better. Thank you for giving our generation hope!
                        </p>
                    </div>
                </header>
                <main>
                    <section>
                        <div className="textBox">
                            <textarea placeholder="Text Here..."></textarea>
                        </div>
                        <div className="sub-section">
                            <Link to="text_end_choose">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        Send
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
