import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../css/tss.min.css';
import '../css/pages/main.min.css';
import Logo from '../img/logo.png';
import Start from '../components/start';
import CityStart from '../components/citizen/start';
import CityCall from '../components/citizen/Calling/diler';
import Call from '../components/citizen/Calling/call_sound.mp3';
import DChoose from '../components/citizen/d_choose';
import APP from '../components/citizen/ap_p';
import PPAP from '../components/citizen/pp_ap';
import CHide from '../components/citizen/c_hide';
import SQuest from '../components/citizen/s_quest';
import SStay from '../components/citizen/s_stay';

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
                <Route exact path="/citizen" render={()=><CityStart audioPlay={this.handleAudioCall.bind(this)}/>}/>
                <Route exact path="/citizen/dialer" render={()=><CityCall audioPause={this.handleAudioCallOff.bind(this)}/>}/>
                <Route exact path="/citizen/d_choose" render={()=><DChoose/>}/>
                <Route exact path="/citizen/d_choose/ap" render={()=><APP/>}/>
                <Route exact path="/citizen/d_choose/ppap" render={()=><PPAP/>}/>
                <Route exact path="/citizen/d_choose/c_hide" render={()=><CHide/>}/>
                <Route exact path="/citizen/d_choose/s_quest" render={()=><SQuest/>}/>
                <Route exact path="/citizen/d_choose/s_stay" render={()=><SStay/>}/>
                <footer>

                </footer>
            </div>
        );
    }
}

export default App;
