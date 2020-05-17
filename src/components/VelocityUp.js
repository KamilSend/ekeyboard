import React from 'react'
import './Buttons.scss'


class VelocityUp extends React.Component{


    render(){
        return(
            <button className="whiteButton velocityButton" onClick={this.props.velocityup}>+</button>
        )
    }
}
export default VelocityUp
