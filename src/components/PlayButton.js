import React from 'react'
import './PlayButton.scss'
import Song from './Song'
import Songs from './Songs'

class PlayButton extends React.Component{

    state = {
        active: false
    }

    handlePlayClick = () => {
        //duration depends on song
        const urlName = [...window.location.pathname]
        urlName.shift()
        urlName.shift()
        urlName.shift()
        urlName.shift()
        urlName.shift()
        urlName.shift()
        urlName.shift()
        urlName.shift()
        urlName.shift()
        urlName.shift()
        urlName.shift()

        const mySong = urlName.join("")

        let duration

        if(mySong==="Old_McDonald"){
            duration = 9000
        }else if (mySong==="Miala_baba_koguta") {
            duration =11000
        }else {
            duration = 9000
        }

        //clearTimeout which might be set from click before
        clearTimeout(this.turnOffactive);

        //start or stop playing
        this.setState({
            active: !this.state.active
        })
        //set interval to change button to "play" when stop playing
        this.turnOffactive = setTimeout(() => {
            this.setState(() => ({active: false}))
        }, duration);

        // e.target.classList.contains(this.myClass)
        // OldMcDonald
    }

    handleNavLinkClick = () => {
        //change status to false when changing songs to prevent running new song before clicking play
        this.setState({
            active: false
        })
    }

    componentWillUnmount() {
        //clear timeout when component will unmount
        clearTimeout(this.turnOffactive);
    }

    render(){
        return(
            <>
                <Songs handleNavLinkClick={this.handleNavLinkClick}/>
                {this.state.active?<Song play={this.state.active}/>:null}

                <button onClick={this.handlePlayClick} className="PlayButton">{!this.state.active?'play':'stop'}</button>
            </>
        )
    }
}

export default PlayButton
