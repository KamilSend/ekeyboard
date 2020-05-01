import React from 'react';
import './App.css';
import PianoKeys from './components/PianoKeys'

import UIfx from 'uifx'
import c from './assets/sound/C.wav'
import d from './assets/sound/D.wav'
import e from './assets/sound/E.wav'
import f from './assets/sound/F.wav'
import g from './assets/sound/G.wav'
import a from './assets/sound/A.wav'
import h from './assets/sound/H.wav'

const config = {
    volume: 1, // number between 0.0 ~ 1.0
    throttleMs: 100}

const sounds = [
    {id:"c", sound:new UIfx(c, config)},
    {id:"d", sound:new UIfx(d, config)},
    {id:"e", sound:new UIfx(e, config)},
    {id:"f", sound:new UIfx(f, config)},
    {id:"g", sound:new UIfx(g, config)},
    {id:"a", sound:new UIfx(a, config)},
    {id:"h", sound:new UIfx(h, config)},
]

class App extends React.Component{

    handleKeyPress = (event) => {

        sounds.forEach(beep => {
            if (event.key === beep.id) {
                beep.sound.play()
            }
        })
    }

    render(){
        return (
            <div className="App" onKeyPress={this.handleKeyPress}>
                <span>G E E F D D C E G</span><br/>
                <span>Wlazł kotek na płotek i mruga,</span><br/>
                <span>G E E F D D C E C</span><br/>
                <span>ładna to piosenka niedługa.</span><br/>
                <span>C E E F D D C E G</span><br/>
                <span>Nie długa, nie krótka, lecz w sam raz.</span><br/>
                <span>G E E F D D C E G</span><br/><br/><br/><br/>


                <span>F F F C D D C</span><br/>
                <span>Old MacDonald had a farm</span><br/>
                <span>A A G G F</span><br/>
                <span>Ee i ee i o</span><br/>
                <span>F F F C D D C</span><br/>
                <span>And on his farm he had some cows</span><br/>
                <span>A A G G F</span><br/>
                <span>Ee i ee i o</span><br/>

                <PianoKeys/>
            </div>
        );
    }

}

export default App;
