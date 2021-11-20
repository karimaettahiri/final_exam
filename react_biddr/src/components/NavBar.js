
import React from 'react';
import {NavLink} from 'react-router-dom';
import { Session } from '../requests';
import auction from '../auction.jpeg';


const NavBar = ({ currentUser, onSignOut }) => {
    const handleSignOut = () => {
        Session.destroy().then(() => {
            onSignOut()
        })
    }
    return(
        <nav>
            <img src={auction} alt="Logo" className="logo-image"/>
             <NavLink to='/'>Home</NavLink>
             <NavLink to='/auctions'>Auctions</NavLink>
            |
            {
                currentUser ? (
                    <>
                        <NavLink to='/auctions/new'>New Auctions</NavLink>
                        - 
                        <span>Welcome, {currentUser.first_name}</span>
                        -
                        <button onClick={handleSignOut}>Sign Out</button>
                    </>
                ) : (
                    <>
                        <NavLink to='sign_in'>Sign In</NavLink>
                        <NavLink to='sign_up'>Sign Up</NavLink>
                    </>
                )
            }
            
        </nav>
    )
}

export default NavBar;

