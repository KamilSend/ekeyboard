import React from 'react'
import './Buttons.scss'


class VelocityDown extends React.Component{


    render(){
        return(
            <button className="whiteButton velocityButton" onClick={this.props.velocitydown}>-</button>
        )
    }
}
export default VelocityDown
