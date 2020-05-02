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

    state = {
        buttonPressed:[
            {id:"0", value:"c", pressed:false},
            {id:"1", value:"d", pressed:false},
            {id:"2", value:"e", pressed:false},
            {id:"3", value:"f", pressed:false},
            {id:"4", value:"g", pressed:false},
            {id:"5", value:"a", pressed:false},
            {id:"6", value:"h", pressed:false},
        ]
    }

    handleClick = (event) => {
        sounds.forEach(beep => {
            if (event.target.textContent === beep.id) {
                beep.sound.play()
            }
        })
    }

    handleKeyPress = (event) => {

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
                let active = buttonPressed2.slice(beep.id,beep.id*1 + 1)
                active = {id:beep.id, value:beep.value, pressed:true}
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
        //console.log(this.state.buttonPressed)
        return (
            <div className="App" onKeyPress={this.handleKeyPress} onKeyUp={this.handleKeyUp}>
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

                <PianoKeys handleClick={this.handleClick} buttonPressed={this.state.buttonPressed}/>

                <br/>
                <br/>
                <br/>
                <br/>
                <span>Wersja robocza, żeby zacząć grać trzeba kliknąć dowolny klawisz a potem używać klawiatury</span>
            </div>
        );
    }

}

export default App;
