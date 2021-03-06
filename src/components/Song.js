import React from 'react'
import './Song.scss'
import Piraci_z_karaibow from "../songs/Piraci_z_karaibow";
import Old_McDonald from '../songs/Old_McDonald'
import Miala_baba_koguta from '../songs/Miala_baba_koguta'
import {Route, Switch} from 'react-router-dom';

class Song extends React.Component{

    render(){
        return(
            <>
                        <Switch>
                            <Route path="/Piraci_z_karaibow" exact component={Piraci_z_karaibow}/>
                            <Route path="/Old_McDonald" exact component={Old_McDonald}/>
                            <Route path="/Miala_baba_koguta" exact component={Miala_baba_koguta}/>
                        </Switch>
            </>
        )
    }
}


export default Song