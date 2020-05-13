import React from 'react'
import './PianoKey.scss'

class PianoKey extends React.Component{


    render(){
        return(
            this.props.descriptions.pressed?<button className="pianoKey pressed">{this.props.descriptions.value}</button>:(
                <button onClick={this.props.handleClick}  className="pianoKey">{this.props.descriptions.value}</button>)
        )
    }
}
export default PianoKey
