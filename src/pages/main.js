import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import '../css/tss.min.css';
import '../css/pages/main.min.css';
import Logo from '../img/logo.png';
import Start from '../components/start';
import CityStart from '../components/citizen/start';
import CityCall from '../components/citizen/Calling/diler';
import Call from '../components/citizen/Calling/call_sound.mp3';
import DChoose from '../components/citizen/d_choose';
import YChoose from '../components/citizen/y_choose';
import APP from '../components/citizen/ap_p';
import PPAP from '../components/citizen/pp_ap';
import PPAP1 from '../components/citizen/pp_ap1';
import CHide from '../components/citizen/c_hide';
import SQuest from '../components/citizen/s_quest';
import SStay from '../components/citizen/s_stay';
import SerzhVideo from '../components/citizen/serzh_video';
import DialerSerzh from '../components/citizen/dialer_serzh';
import YAPP from '../components/citizen/y_ap_p';
import YPP from '../components/citizen/y_pp';
import POLive from '../components/citizen/y_pp_live';
import POption from '../components/citizen/p_option';
import POptionRight from '../components/citizen/p_option_right';
import ArrestFriends from '../components/citizen/arrest_friends';
import ArrestFriendsCongrats from '../components/citizen/arrest_friends_congrats';
import April17 from '../components/citizen/april17';
import April17ASAP from '../components/citizen/april17asap';
import FriArrPP from '../components/citizen/fri_arr_pp';
import FriArrPPCongrats from '../components/citizen/fri_arr_pp_congrats';
import FriArrPPParlVideo from '../components/citizen/fri_arr_pp_parl_video';
import FriArrPPJoin from '../components/citizen/fri_arr_pp_join';
import TextPP from '../components/citizen/text_pp';
import Siselect from '../components/citizen/siselect';
import Siselectprevideo from '../components/citizen/siselectprevideo';
import VelevetRevolution from '../components/citizen/velvet_revolution';
import VelevetRevolutionOption from '../components/citizen/velvet_revolution_option';
import VelevetRevolutionOptionImgStreets from '../components/citizen/velvet_revolution_option_imgstreets';
import VelevetRevolutionOptionImgMetro from '../components/citizen/velvet_revolution_option_imgmetro';
import VelevetRevolutionText from '../components/citizen/velvet_revolution_text';
import VelevetRevolutionSplite from '../components/citizen/velvet_revolution_splite';
import CAC from '../components/citizen/cac';
import CACBCall from '../components/citizen/cac_bcall';
import CACOptionT from '../components/citizen/cac_option_t';
import CACScared from '../components/citizen/cac_scared';
import CACLiveVideo from '../components/citizen/cac_live_video';
import CACLiveVideoOption from '../components/citizen/live_video_option';
import EndLiveVideo from '../components/citizen/end_live_video';
import EndOption from '../components/citizen/end_option';
import EndText from '../components/citizen/end_text';
import EndTextOption from '../components/citizen/end_text_option';
import EndTextEnd from '../components/citizen/end_text_end';
import EndTextOptionImg1 from '../components/citizen/text_option_img1';
import EndTextOptionImg2 from '../components/citizen/text_option_img2';
import EndTextChoose from '../components/citizen/end_text_choose';
import EndTextText from '../components/citizen/end_text_text';
import BSQuest from '../components/citizen/before_s_quest';

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
                            <Link to="./">Hello</Link>
                        </div>
                    </div>
                </nav>
                <Route exact path="/" component={Start}/>
                <Route exact path="/citizen" render={()=><CityStart audioPlay={this.handleAudioCall.bind(this)}/>}/>
                <Route exact path="/citizen/dialer" render={()=><CityCall audioPause={this.handleAudioCallOff.bind(this)}/>}/>
                <Route exact path="/citizen/y_choose" render={()=><YChoose/>}/>
                <Route exact path="/citizen/y_choose/ap" render={()=><YAPP/>}/>
                <Route exact path="/citizen/y_choose/pp" render={()=><YPP/>}/>
                <Route exact path="/citizen/y_choose/p_option" render={()=><POption/>}/>
                <Route exact path="/citizen/y_choose/p_option/fri_arr_pp" render={()=><FriArrPP/>}/>
                <Route exact path="/citizen/y_choose/p_option/live" render={()=><POLive/>}/>
                <Route exact path="/citizen/y_choose/p_option/text_pp" render={()=><TextPP/>}/>
                <Route exact path="/citizen/y_choose/p_option/fri_arr_pp/congrats" render={()=><FriArrPPCongrats/>}/>
                <Route exact path="/citizen/y_choose/p_option/fri_arr_pp/join" render={()=><FriArrPPJoin/>}/>
                <Route exact path="/citizen/y_choose/p_option/fri_arr_pp/parl_video" render={()=><FriArrPPParlVideo/>}/>
                <Route exact path="/citizen/y_choose/p_option/p_option_right" render={()=><POptionRight/>}/>
                <Route exact path="/citizen/d_choose" render={()=><DChoose/>}/>
                <Route exact path="/citizen/d_choose/ap" render={()=><APP/>}/>
                <Route exact path="/citizen/d_choose/ppap" render={()=><PPAP/>}/>
                <Route exact path="/citizen/d_choose/ppap1" render={()=><PPAP1/>}/>
                <Route exact path="/citizen/d_choose/before_s_quest" render={()=><BSQuest/>}/>
                <Route exact path="/citizen/d_choose/c_hide" render={()=><CHide/>}/>
                <Route exact path="/citizen/d_choose/s_quest" render={()=><SQuest/>}/>
                <Route exact path="/citizen/d_choose/s_stay" render={()=><SStay/>}/>
                <Route exact path="/citizen/d_choose/serzh_video" render={()=><SerzhVideo/>}/>
                <Route exact path="/citizen/dialer_serzh" render={()=><DialerSerzh audioPause={this.handleAudioCallOff.bind(this)}/>}/>
                <Route exact path="/citizen/arrest_friends" render={()=><ArrestFriends/>}/>
                <Route exact path="/citizen/arrest_friends/congrats" render={()=><ArrestFriendsCongrats/>}/>
                <Route exact path="/citizen/april17" render={()=><April17/>}/>
                <Route exact path="/citizen/april17/asap" render={()=><April17ASAP/>}/>
                <Route exact path="/citizen/siselect" render={()=><Siselect/>}/>
                <Route exact path="/citizen/siselectprevideo" render={()=><Siselectprevideo/>}/>
                <Route exact path="/citizen/siselect/velvet_revolution" render={()=><VelevetRevolution/>}/>
                <Route exact path="/citizen/siselect/velvet_revolution/option" render={()=><VelevetRevolutionOption/>}/>
                <Route exact path="/citizen/siselect/velvet_revolution/option/imgstreets" render={()=><VelevetRevolutionOptionImgStreets/>}/>
                <Route exact path="/citizen/siselect/velvet_revolution/option/imgmetro" render={()=><VelevetRevolutionOptionImgMetro/>}/>
                <Route exact path="/citizen/siselect/velvet_revolution/option/text" render={()=><VelevetRevolutionText/>}/>
                <Route exact path="/citizen/siselect/velvet_revolution/option/splite" render={()=><VelevetRevolutionSplite/>}/>
                <Route exact path="/citizen/cac" render={()=><CAC/>}/>
                <Route exact path="/citizen/cac/bcall" render={()=><CACBCall/>}/>
                <Route exact path="/citizen/cac/optiont" render={()=><CACOptionT/>}/>
                <Route exact path="/citizen/cac/scared" render={()=><CACScared/>}/>
                <Route exact path="/citizen/cac/live_video" render={()=><CACLiveVideo/>}/>
                <Route exact path="/citizen/cac/live_video_option" render={()=><CACLiveVideoOption/>}/>
                <Route exact path="/citizen/end/live_video" render={()=><EndLiveVideo/>}/>
                <Route exact path="/citizen/end/text" render={()=><EndText/>}/>
                <Route exact path="/citizen/end/text_option" render={()=><EndTextOption/>}/>
                <Route exact path="/citizen/end/text_option_img1" render={()=><EndTextOptionImg1/>}/>
                <Route exact path="/citizen/end/text_option_img2" render={()=><EndTextOptionImg2/>}/>
                <Route exact path="/citizen/end/text_end" render={()=><EndTextEnd/>}/>
                <Route exact path="/citizen/end/text_end_choose" render={()=><EndTextChoose/>}/>
                <Route exact path="/citizen/end/text_end_text" render={()=><EndTextText/>}/>
                <footer>

                </footer>
            </div>
        );
    }
}

export default App;
