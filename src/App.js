import React from 'react';
import './App.scss';
import PianoKeys from './components/PianoKeys'
import {BrowserRouter} from 'react-router-dom';
import PlayButton from './components/PlayButton'
import ChangeKeyboard from './components/ChangeKeyboard'
import Background from "./assets/images/piano.png";
import GoogleFontLoader from 'react-google-font-loader';


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
    {id:"c", upperId:"C", altid:"s", upperAltid:"S", sound:new UIfx(c, config)},
    {id:"d", upperId:"D", altid:"d", upperAltid:"D", sound:new UIfx(d, config)},
    {id:"e", upperId:"E", altid:"f", upperAltid:"F", sound:new UIfx(e, config)},
    {id:"f", upperId:"F", altid:"g", upperAltid:"G", sound:new UIfx(f, config)},
    {id:"g", upperId:"G", altid:"h", upperAltid:"H", sound:new UIfx(g, config)},
    {id:"a", upperId:"A", altid:"j", upperAltid:"J", sound:new UIfx(a, config)},
    {id:"h", upperId:"H", altid:"k", upperAltid:"K", sound:new UIfx(h, config)},
]

class App extends React.Component{

    state = {
        buttonPressed:[
            {id:"0", value:"c", upperValue:"C", altvalue:"s", upperAltvalue:"S", pressed:false},
            {id:"1", value:"d", upperValue:"D", altvalue:"d", upperAltvalue:"D", pressed:false},
            {id:"2", value:"e", upperValue:"E", altvalue:"f", upperAltvalue:"F", pressed:false},
            {id:"3", value:"f", upperValue:"F", altvalue:"g", upperAltvalue:"G", pressed:false},
            {id:"4", value:"g", upperValue:"G", altvalue:"h", upperAltvalue:"H", pressed:false},
            {id:"5", value:"a", upperValue:"A", altvalue:"j", upperAltvalue:"J", pressed:false},
            {id:"6", value:"h", upperValue:"H", altvalue:"k", upperAltvalue:"K", pressed:false},
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
            if ((event.key === beep.id || event.key === beep.upperId) && !this.state.alt) {
                beep.sound.play()
            }else if ((event.key === beep.altid || event.key === beep.upperAltid)&& this.state.alt){
                beep.sound.play()
            }
        })

        //copy current state
        const buttonPressed = [...this.state.buttonPressed]
        //another table to keep active buttons, it's necessary to handle multiple keys in the future
        const buttonPressed2 =[]

        buttonPressed.forEach(beep => {
            //clear pressed keys
            beep = {id:beep.id, value:beep.value, upperValue:beep.upperValue, altvalue:beep.altvalue, upperAltvalue:beep.upperAltvalue, pressed:false}
            buttonPressed2.push(beep)

            if ((event.key === beep.value ||event.key === beep.upperValue)&& !this.state.alt) {
                let active = {id:beep.id, value:beep.value, upperValue:beep.upperValue, altvalue:beep.altvalue, upperAltvalue:beep.upperAltvalue, pressed:true}
                buttonPressed2[beep.id] = active
                this.setState({
                    buttonPressed:buttonPressed2
                })
            }
            else if ((event.key === beep.altvalue || event.key === beep.upperAltvalue) && this.state.alt) {

                let active = {id:beep.id, value:beep.value, upperValue:beep.upperValue, altvalue:beep.altvalue, upperAltvalue:beep.upperAltvalue, pressed:true}
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
                {id:"0", value:"c", upperValue:"C", altvalue:"s", upperAltvalue:"S", pressed:false},
                {id:"1", value:"d", upperValue:"D", altvalue:"d", upperAltvalue:"D", pressed:false},
                {id:"2", value:"e", upperValue:"E", altvalue:"f", upperAltvalue:"F", pressed:false},
                {id:"3", value:"f", upperValue:"F", altvalue:"g", upperAltvalue:"G", pressed:false},
                {id:"4", value:"g", upperValue:"G", altvalue:"h", upperAltvalue:"H", pressed:false},
                {id:"5", value:"a", upperValue:"A", altvalue:"j", upperAltvalue:"J", pressed:false},
                {id:"6", value:"h", upperValue:"H", altvalue:"k", upperAltvalue:"K", pressed:false},
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
                 <GoogleFontLoader
                     fonts={[
                         {
                             font: 'Lobster Two',
                             weights: [400],
                         },
                     ]}
                     subsets={['cyrillic-ext', 'greek']}
                 />
                 <img src={Background} alt="kitchen" className="backgroundImg"/>

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

