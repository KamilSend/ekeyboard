import React from 'react'
import PianoKey from "./PianoKey";

const descriptions = ['C','D','E','F','G','A','H']

const PianoKeys = () => {
    return(

        descriptions.map(description =>(
            <PianoKey descriptions={description}/>
        ))

    )
}

export default PianoKeys