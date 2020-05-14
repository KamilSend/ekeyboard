import React from 'react'
import './PianoKey.scss'

class PianoKey extends React.Component{

    render(){
        return(
            //NEED TO CHANGE THIS TO WORK WITH ALTERNATIVE KEYBOARD
                this.props.pressed?<button className="pianoKey pressed">{this.props.descriptions}</button>:
                    (<button onClick={this.props.handleClick}  className="pianoKey">{this.props.descriptions}</button>)                )
    }
}
export default PianoKey
