import React from 'react'
import './PlayButton.scss'
import Song from './Song'
import Songs from './Songs'


class PlayButton extends React.Component{

    state = {
        active: false
    }

    handlePlayClick = () => {
        this.setState({
            active: !this.state.active
        })
    }

    handleNavLinkClick = () => {
        this.setState({
            active: false
        })
    }

    render(){
        return(
            <>
                <Songs handleNavLinkClick={this.handleNavLinkClick}/>
                {this.state.active?<Song play={this.state.active}/>:null}

                <button onClick={this.handlePlayClick} className="PlayButton">play</button>
            </>
        )
    }
}


// const PlayButton = () => {
//
//         return(
//             <button className="PlayButton">play</button>
//         )
//     }

export default PlayButton
