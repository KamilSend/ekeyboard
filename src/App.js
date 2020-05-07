import React from 'react';

import './App.scss';
import PianoKeys from './components/PianoKeys'
import Songs from './components/Songs'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Piraci_z_karaibow from './songs/Piraci_z_karaibow'
import Old_McDonald from './songs/Old_McDonald'
import Bella_ciao from './songs/Bella_ciao'
import Miala_baba_koguta from './songs/Miala_baba_koguta'
import PlayButton from './components/PlayButton'



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

    state = {
        buttonPressed:[
            {id:"0", value:"c", pressed:false},
            {id:"1", value:"d", pressed:false},
            {id:"2", value:"e", pressed:false},
            {id:"3", value:"f", pressed:false},
            {id:"4", value:"g", pressed:false},
            {id:"5", value:"a", pressed:false},
            {id:"6", value:"h", pressed:false},
        ],
    }

    handleClick = (event) => {
        sounds.forEach(beep => {
            if (event.target.textContent === beep.id) {
                beep.sound.play()
            }
        })
    }

    handleKeyPress = (event) => {
        console.log('press')
        sounds.forEach(beep => {
            if (event.key === beep.id) {
                beep.sound.play()
            }
        }) //ma się odtworzyć dźwięk, absolutnie niezbędne

        const buttonPressed = [...this.state.buttonPressed]
        const buttonPressed2 =[]//kopia stanu i pusta tablica do której będą pushowane wyfolsowane elementy

        buttonPressed.forEach(beep => {
            beep = {id:beep.id, value:beep.value, pressed:false}
            buttonPressed2.push(beep)

            if (event.key === beep.value) {
                // let active = buttonPressed2.slice(beep.id,beep.id*1 + 1)
                let active = {id:beep.id, value:beep.value, pressed:true}
                buttonPressed2[beep.id] = active
                this.setState({
                    buttonPressed:buttonPressed2
                })
            }
        })
    }

    handleKeyUp = () => {

            this.setState({
                buttonPressed:[
                    {id:"0", value:"c", pressed:false},
                    {id:"1", value:"d", pressed:false},
                    {id:"2", value:"e", pressed:false},
                    {id:"3", value:"f", pressed:false},
                    {id:"4", value:"g", pressed:false},
                    {id:"5", value:"a", pressed:false},
                    {id:"6", value:"h", pressed:false},
                ]
            })
    }

    render(){

        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>

                    <Songs/>


                <div className="App" onKeyPress={this.handleKeyPress} onKeyUp={this.handleKeyUp}>
                    <div className="songContainer">
                        <Switch>
                            <Route path="/Piraci_z_karaibow" exact component={Piraci_z_karaibow}/>
                            <Route path="/Old_McDonald" exact component={Old_McDonald}/>
                            <Route path="/Bella_ciao" exact component={Bella_ciao}/>
                            <Route path="/Miala_baba_koguta" exact component={Miala_baba_koguta}/>
                        </Switch>
                    </div>

                    <div className="keyboard" >
                        <PianoKeys handleClick={this.handleClick} buttonPressed={this.state.buttonPressed}/>
                    </div>
                    <PlayButton/>

                </div>
            </BrowserRouter>
        );
    }
}

export default App;

