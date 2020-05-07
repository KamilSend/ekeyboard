import React from 'react'
import './Song.scss'
import Piraci_z_karaibow from "../songs/Piraci_z_karaibow";
import Old_McDonald from '../songs/Old_McDonald'
import Bella_ciao from '../songs/Bella_ciao'
import Miala_baba_koguta from '../songs/Miala_baba_koguta'
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class Song extends React.Component{

    render(){
        return(
            <>
                {/*{this.props.play?<Piraci_z_karaibow/>:null}*/}

                {/*<BrowserRouter basename={process.env.PUBLIC_URL}>*/}
                        <Switch>
                            <Route path="/Piraci_z_karaibow" exact component={Piraci_z_karaibow}/>
                            <Route path="/Old_McDonald" exact component={Old_McDonald}/>
                            <Route path="/Bella_ciao" exact component={Bella_ciao}/>
                            <Route path="/Miala_baba_koguta" exact component={Miala_baba_koguta}/>
                        </Switch>
                {/*</BrowserRouter>*/}
            </>
        )
    }
}


export default Song