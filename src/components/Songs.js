import React from 'react'
import {NavLink} from 'react-router-dom'
import './Songs.scss'
const list = [
    {name: "Piraci z karaibów", path: "/Piraci_z_karaibow"},
    {name: "Old McDonald", path: "/Old_McDonald"},
    {name: "Miała baba koguta", path: "/Miala_baba_koguta"},
]

const Songs = (props) => {

    const songMenu = list.map(item => (
        <li key={item.name}>
            <NavLink onClick={props.handleNavLinkClick} to={item.path} exact={item.exact?item.exact:false}>{item.name}</NavLink>
        </li>
    ))

    return(
        <nav className="main">
            <ul>
                {songMenu}
            </ul>
        </nav>
    )
}

export default Songs
