import React from 'react'
import './Buttons.scss'

class ChangeKeyboard extends React.Component{

    render(){
        return(
            <div className="changeKeyboardWrapper">
                <span>SWITCH</span>
                <span>KEYBOARD</span>

                <div className="whiteButton changeKeyboardButton" onClick={this.props.changeKeyboard}>
                    {this.props.alt?"PC":"PIANO"}</div>
            </div>
        )
    }
}
export default ChangeKeyboard
