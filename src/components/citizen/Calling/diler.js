import React, { Component } from 'react';
import './diler.min.css';
import Call from './call.svg';
import DadCall from './dad_call.mp3';
import WIconRed from './warning.svg';
import EPIcon from './headset.svg';

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
        element.style.display = "none";
        let wBox = document.getElementById("wBox");
        wBox.style.display = "inherit";
        var maudio = document.getElementById("dadCall");
        maudio.play();
        let printBox = document.getElementById("timeBox");
        let textBox = document.getElementById("timeTextBox");
        printBox.style.display = "inherit";
        let timer = setInterval(function() {
            let ctime = maudio.currentTime
            var minutes = "0" + Math.floor(ctime / 60);
            var seconds = "0" + Math.floor(ctime % 60 + 1);
            var dur = minutes.substr(-2) + ":" + seconds.substr(-2);
            textBox.innerHTML = dur;
        },1000);
        maudio.onended = function() {
            setTimeout(function () {
                // clearInterval(timer);
                window.location.href = "./d_choose";
            },300);
        };
    }
    render() {
        return (
            <div className="calling-box">
                <audio id="dadCall">
                    <source src={DadCall} type="audio/mpeg"/>
                </audio>
                <main id="dialer">
                    <section className="d--flex">
                        <div className="top-bar c--white d--flex align-center">
                            <div>
                                Incoming call
                            </div>
                            <div id="timeBox" className="callTimeBox">
                                <div id="timeTextBox" className="callTimeTextbox">
                                    00:00
                                </div>
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
                                    <img src={Call} title="Call button" alt="Call button"/>
                                </div>
                            </div>
                            <div id="wBox" className="warningHeadset d--flex align-center justify-center">
                                <div className="w-icon">
                                    <img src={WIconRed} alt="Warning" title="Warning"/>
                                </div>
                                <div className="text c--white">
                                    Please, Dont Unplug Your headsets from the phone.
                                </div>
                                <div className="e-icon">
                                    <img src={EPIcon} alt="Warning" title="Warning"/>
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
