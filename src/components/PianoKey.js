// import React from 'react'
// import './PianoKey.scss'
//
//
//
//
// const PianoKey = (props) => {
//     // console.log(props.descriptions.pressed)
//
//     return(
//
//         props.descriptions.pressed?<button className="pianoKey pressed">{props.descriptions.value}</button>:<button className="pianoKey">{props.descriptions.value}</button>
//             // <button className="pianoKey">{props.buttonPressed[0].value}</button>
//     )
// }
//
// export default PianoKey

//TODO: przerobić na komponent stanowy, uzależnić wygląd od wciśnięcia klawisza
//najpierw spróbować zrobić funkcje która jest uzależniona od stanu "pressed"
import React from 'react'
import './PianoKey.scss'

class PianoKey extends React.Component{

    render(){
        console.log(this.props.descriptions.pressed)
        return(

            this.props.descriptions.pressed?<button className="pianoKey pressed">{this.props.descriptions.value}</button>:(
                <button className="pianoKey">{this.props.descriptions.value}</button>)
        )
    }
}
export default PianoKey
