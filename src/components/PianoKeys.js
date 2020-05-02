import React from 'react'
import PianoKey from "./PianoKey";


const PianoKeys = (props) => {

    return(
        props.buttonPressed.map(description =>(
        <PianoKey descriptions={description}/>
    ))

    )
}

export default PianoKeys