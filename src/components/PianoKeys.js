import React from 'react'
import PianoKey from "./PianoKey";


const PianoKeys = (props) => {

    return(
        props.buttonPressed.map(description =>(
        <PianoKey handleClick={props.handleClick} descriptions={description} />
    ))

    )
}

export default PianoKeys