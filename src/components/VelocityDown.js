import React from 'react'
import './Buttons.scss'


class VelocityDown extends React.Component{


    render(){
        return(
            <div className="whiteButton velocityButton" onClick={this.props.velocitydown}>-</div>
        )
    }
}
export default VelocityDown
