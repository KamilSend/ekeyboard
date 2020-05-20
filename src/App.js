import React from 'react';
import './App.scss';
import PianoKeys from './components/PianoKeys'
import {BrowserRouter} from 'react-router-dom';
import PlayButton from './components/PlayButton'
import ChangeKeyboard from './components/ChangeKeyboard'

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
    {id:"c", altid:"s", sound:new UIfx(c, config)},
    {id:"d", altid:"d", sound:new UIfx(d, config)},
    {id:"e", altid:"f", sound:new UIfx(e, config)},
    {id:"f", altid:"g", sound:new UIfx(f, config)},
    {id:"g", altid:"h", sound:new UIfx(g, config)},
    {id:"a", altid:"j", sound:new UIfx(a, config)},
    {id:"h", altid:"k", sound:new UIfx(h, config)},
]

class App extends React.Component{

    state = {
        buttonPressed:[
            {id:"0", value:"c", altvalue:"s", pressed:false},
            {id:"1", value:"d", altvalue:"d", pressed:false},
            {id:"2", value:"e", altvalue:"f", pressed:false},
            {id:"3", value:"f", altvalue:"g", pressed:false},
            {id:"4", value:"g", altvalue:"h", pressed:false},
            {id:"5", value:"a", altvalue:"j", pressed:false},
            {id:"6", value:"h", altvalue:"k", pressed:false},
        ],
        alt: true,
    }

    //Play sound on click
    handleClick = (event) => {
        sounds.forEach(beep => {
            if (event.target.textContent === beep.id && !this.state.alt) {
                beep.sound.play()
            }else if (event.target.textContent === beep.altid && this.state.alt){
                beep.sound.play()
            }
        })
    }

    //Play sound on key press
    handleKeyPress = (event) => {
        sounds.forEach(beep => {
            if (event.key === beep.id && !this.state.alt) {
                beep.sound.play()
            }else if (event.key === beep.altid && this.state.alt){
                beep.sound.play()
            }
        })

        //copy current state
        const buttonPressed = [...this.state.buttonPressed]
        //another table to keep active buttons, it will be necessary to handle multiple keys in the future
        const buttonPressed2 =[]

        buttonPressed.forEach(beep => {
            //clear pressed keys
            beep = {id:beep.id, value:beep.value, altvalue:beep.altvalue, pressed:false}
            buttonPressed2.push(beep)

            if (event.key === beep.value && !this.state.alt) {
                let active = {id:beep.id, value:beep.value, altvalue:beep.altvalue, pressed:true}
                buttonPressed2[beep.id] = active
                this.setState({
                    buttonPressed:buttonPressed2
                })
            }
            else if (event.key === beep.altvalue && this.state.alt) {
                let active = {id:beep.id, value:beep.value,  altvalue:beep.altvalue, pressed:true}
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
                {id:"0", value:"c", altvalue:"s", pressed:false},
                {id:"1", value:"d", altvalue:"d", pressed:false},
                {id:"2", value:"e", altvalue:"f", pressed:false},
                {id:"3", value:"f", altvalue:"g", pressed:false},
                {id:"4", value:"g", altvalue:"h", pressed:false},
                {id:"5", value:"a", altvalue:"j", pressed:false},
                {id:"6", value:"h", altvalue:"k", pressed:false},
            ],
        })
    }

    handleChangeKeyboardClick = () => {
        this.setState({
            alt: !this.state.alt,
        })
    }

    render(){

        return (
             <BrowserRouter basename={process.env.PUBLIC_URL}>
                <div className="App" onKeyPress={this.handleKeyPress} onKeyUp={this.handleKeyUp}>
                    <div className="keyboard" >
                        <PianoKeys handleClick={this.handleClick} alt={this.state.alt}
                                   buttonPressed={this.state.buttonPressed}/>
                    </div>
                    <PlayButton/>
                    <ChangeKeyboard alt={this.state.alt} changeKeyboard={this.handleChangeKeyboardClick}/>
                </div>
             </BrowserRouter>
        );
    }
}

export default App;

