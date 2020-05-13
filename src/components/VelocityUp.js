import React from 'react'
import './Buttons.scss'


class VelocityUp extends React.Component{


    render(){
        return(
            <div className="whiteButton velocityButton" onClick={this.props.velocityup}>+</div>
        )
    }
}
export default VelocityUp
