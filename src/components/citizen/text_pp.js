import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="box">
                <header>
                    <div className="header-box">
                        <h1 className="">
                            Some Text Cool Again<span>.</span>
                        </h1>
                        <p>
                         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                </header>
                <main>
                    <section>
                        <div className="textBox">
                            <textarea placeholder="Text Here..."></textarea>
                        </div>
                        <div className="sub-section">
                            <Link to="./fri_arr_pp">
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
