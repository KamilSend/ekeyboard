import React from 'react'
import './PianoKey.scss'

class PianoKey extends React.Component{

    render(){
        return(
                this.props.pressed?<button className="pianoKey pressed">{this.props.descriptions}</button>:
                    (<button onClick={this.props.handleClick}  className="pianoKey">{this.props.descriptions}</button>)                )
    }
}
export default PianoKey
