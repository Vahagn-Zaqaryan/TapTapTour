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
                            Now that Serzh Sargsyan is an official Republican Party Candidate, the stakes are high! A group of students plans to block Yerevan’s biggest college campus intersection!
                        </p>
                    </div>
                </header>
                <main>
                    <section>
                        <div className="sub-section">
                            <Link to="y_choose/ap">
                                <div className="buttonLink f-f--ourF">
                                    <span className="f-f--ourF">
                                        I will march with the students!
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="sub-section">
                            <Link to="y_choose/ap">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        I will take the metro to Yeritasardakan station!
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="sub-section">
                            <Link to="y_choose/pp">
                                <div className="buttonLink">
                                    <span className="f-f--ourF">
                                        Is it that significant? I will just follow the news!
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
