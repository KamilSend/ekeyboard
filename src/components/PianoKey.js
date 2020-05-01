// import React from 'react'
// import './PianoKey.scss'
//
// const PianoKey = (props) => {
//     return(
//         <button className="pianoKey">{props.descriptions}</button>
//     )
// }
//
// export default PianoKey

import React from 'react'
import './PianoKey.scss'

class PianoKey extends React.Component{

    state = {
        pressed: false
    }

    render(){
        return(
            this.state.pressed?<button className="pianoKey pressed">{this.props.descriptions}</button>:<button className="pianoKey">{this.props.descriptions}</button>
        )
    }
}


export default PianoKey
