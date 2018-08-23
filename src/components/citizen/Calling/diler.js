import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './diler.min.css';
import Call from './call.svg';

class App extends Component {
    componentDidMount () {
        setTimeout(function(){
            let element = document.getElementById("dialer");
            element.style.display = "inherit";
            var maudio = document.getElementById("myAudio");
            maudio.play();
        }, 1000);
    }
    handleCallOff() {
        this.props.audioPause();
        let element = document.getElementById("call_button");
        element.style.visibility = "hidden";
        setTimeout(function () {
            // Play audio
            window.location.href = "https://taptaptravel.github.io/bearebel/#/citizen/d_choose";
        },1000);
    }
    render() {
        return (
            <div className="calling-box">
                <main id="dialer">
                    <section className="d--flex">
                        <div className="top-bar c--white d--flex align-center">
                            <div>
                                Incoming call
                            </div>
                        </div>
                        <div className="name c--white d--flex justify-center align-center">
                            <div>
                                <h4>Dad</h4>
                                <h6>Mobile +374 99 122312</h6>
                            </div>
                        </div>
                        <div className="accept-call d--flex justify-center align-center">
                            <div className="call-button d--flex justify-center align-center" onClick={this.handleCallOff.bind(this)} id="call_button">
                                <div className="">
                                    <img src={Call} title="Call button"/>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        );
    }
}

export default App;
