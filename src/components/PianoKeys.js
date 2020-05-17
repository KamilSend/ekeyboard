import React from 'react'
import PianoKey from "./PianoKey";

const PianoKeys = (props) => {

    return(
        //NEED TO CHANGE THIS TO WORK WITH ALTERNATIVE KEYBOARD
        props.alt?
        props.buttonPressed.map(description =>(
            <PianoKey key={description.id} handleClick={props.handleClick}
                      descriptions={description.altvalue} pressed={description.pressed} />))
        :props.buttonPressed.map(description =>(
                <PianoKey key={description.id} handleClick={props.handleClick}
                          descriptions={description.value} pressed={description.pressed}/>))
    )

}

// const PianoKeys = (props) => {
//
//     return(
//         props.buttonPressed.map(description =>(
//             <PianoKey key={description.id} handleClick={props.handleClick} descriptions={description} />
//         ))
//     )
// }

export default PianoKeys