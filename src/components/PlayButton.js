import React from 'react'
import './Buttons.scss'
import Song from './Song'
import Songs from './Songs'
import VelocityUp from "./VelocityUp";
import VelocityDown from "./VelocityDown";
import speedBaba from '../songs/Miala_baba_koguta.scss';
import speedPiraci from '../songs/Piraci_z_karaibow.scss';
import speedOld from '../songs/Old_McDonald.scss';
import '../App.scss';

class PlayButton extends React.Component{

    state = {
        active: false,
        baba: 11000,
        piraci: 9000,
        old: 9000,
        velocity:1,
    }

    handlePlayClick = () => {

        speedBaba.babaDuration = this.state.baba
        speedPiraci.piraciDuration = this.state.piraci
        speedOld.oldDuration = this.state.old

        //duration depends on song
        const urlName = [...window.location.pathname]
        urlName.splice(0, 11)

        const mySong = urlName.join("")
        let duration

        if(mySong==="Old_McDonald"){
            duration = speedOld.oldDuration
        }else if (mySong==="Miala_baba_koguta") {
            duration = speedBaba.babaDuration
        }else if (mySong==="Piraci_z_karaibow") {
            duration = speedPiraci.piraciDuration
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


    }

    //change status to false when changing songs to prevent running new song before clicking play
    handleNavLinkClick = () => {
        this.setState({
            active: false
        })
    }
    //change velocity, letters go 1s faster
    handleVelocityUpClick = () => {
        if(this.state.velocity < 10){
            this.setState({
                active: false,
                baba: this.state.baba - 1000,
                piraci:this.state.piraci - 1000,
                old:this.state.old - 1000,
                velocity:this.state.velocity + 1,
            })
        }

    }

    //change velocity, letters go 1s slower
    handleVelocityDownClick = () => {
        if(this.state.velocity > -9){
            this.setState({
                active: false,
                baba: this.state.baba + 1000,
                piraci: this.state.piraci + 1000,
                old: this.state.old + 1000,
                velocity:this.state.velocity - 1,
            })
        }
    }

    componentWillUnmount() {
        //clear timeout when component will unmount
        clearTimeout(this.turnOffactive);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        //set css animation time
        const baby = document.querySelectorAll("span.baba");
        const piraci = document.querySelectorAll("span.piraci");
        const old = document.querySelectorAll("span.old");

        baby.forEach((baba)=>{
            let cssSpeed = speedBaba.babaDuration/1000
            baba.style.webkitAnimationDuration = cssSpeed + 's'
        })

        piraci.forEach((pirat)=>{
            let cssSpeed = speedPiraci.piraciDuration/1000
            pirat.style.webkitAnimationDuration = cssSpeed + 's'
        })

        old.forEach((donald)=>{
            let cssSpeed = speedOld.oldDuration/1000
            donald.style.webkitAnimationDuration = cssSpeed + 's'
        })

    }

    render(){
        return(
            <>
                <Songs handleNavLinkClick={this.handleNavLinkClick}/>
                {this.state.active?<Song play={this.state.active}/>:null}

                <button onClick={this.handlePlayClick} className="PlayButton whiteButton">{!this.state.active?'play':'stop'}</button>
                <div className="velocityWrapper">
                    <div className="velocitySpanWrapper">
                        <span>S</span><br/>
                        <span>P</span><br/>
                        <span>E</span><br/>
                        <span>E</span><br/>
                        <span>D</span><br/>
                    </div>
                    <div className="velocityButtonsWrapper">
                        <VelocityUp velocityup={this.handleVelocityUpClick}/>
                        <span>{this.state.velocity}</span>
                        <VelocityDown velocitydown={this.handleVelocityDownClick}/>
                    </div>

                </div>


            </>
        )
    }
}

export default PlayButton
