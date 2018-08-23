import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../css/tss.min.css';
import '../css/pages/main.min.css';
import Logo from '../img/logo.png';
import Start from '../components/start';
import City_Start from '../components/citizen/start';
import City_Call from '../components/citizen/Calling/diler';
import Call from '../components/citizen/Calling/call_sound.mp3';
import D_Choose from '../components/citizen/d_choose';
import AP_P from '../components/citizen/ap_p';

class App extends Component {
    handleAudioCall () {
        setTimeout(function(){
            var maudio = document.getElementById("myAudio");
            maudio.play();
        }, 1100);
    }
    handleAudioCallOff() {
        var maudio = document.getElementById("myAudio");
        maudio.pause();
        maudio.currentTime = 0;
    }
    render() {
        return (
            <div className="container">
                <audio id="myAudio">
                    <source src={Call} type="audio/mpeg"/>
                </audio>
                <aside></aside>
                <nav className="w--full">
                    <div className="nav-box d--flex ">
                        <div className="logo-box">
                            <img src={Logo} alt="Logo" title="Logo"/>
                        </div>
                        <div className="">

                        </div>
                    </div>
                </nav>
                <Route exact path="/" component={Start}/>
                <Route exact path="/citizen" render={()=><City_Start audioPlay={this.handleAudioCall.bind(this)}/>}/>
                <Route exact path="/citizen/dialer" render={()=><City_Call audioPause={this.handleAudioCallOff.bind(this)}/>}/>
                <Route exact path="/citizen/d_choose" render={()=><D_Choose/>}/>
                <Route exact path="/citizen/d_choose/ap" render={()=><AP_P/>}/>
                <footer>

                </footer>
            </div>
        );
    }
}

export default App;
