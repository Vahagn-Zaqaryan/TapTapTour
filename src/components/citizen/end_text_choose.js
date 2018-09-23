import React, { Component } from 'react';


class App extends Component {
    render() {
        return (
            <div className="box">
                <header>
                    <div className="header-box">
                        <p>
                            After parents text: You and hundreds of thousands of citizens demand a re-election. The Parliament holds a second election. The Republicans promised to yield enough votes to elect Nikol!
                        </p>
                        <h1 className="">
                            WATCH HOW WILL THE VOTING UNFOLD<span>!</span>
                        </h1>
                    </div>
                </header>
                <main>
                    <section>
                        <div className="video-YouTube">
                            <iframe src="https://www.youtube.com/embed/UMPiZogDRiY" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen="allowfullscreen" title="Velvet Revolution Cutscene"></iframe>
                        </div>
                        <h1 className="text-non">
                            THE CHANGE HAS COME! CONGRATULATIONS ON COMPLETING “WALK THE ROAD OF THE VELVET REVOLUTION!” THANKS TO YOUR EFFORTS, CITIZEN, A DICTATOR LOST HIS CONTINUOUS POWER AND YOUR FELLOW CITIZENS FINALLY HAVE HOPE FOR ARMENIA’S FUTURE!
                        </h1>
                    </section>
                </main>
            </div>
        );
    }
}

export default App;
