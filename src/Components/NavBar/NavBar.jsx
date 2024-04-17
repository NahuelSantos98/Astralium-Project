import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import { appFirebase } from '../../services/firebaseConfig';
import userProfileNone from '../../assets/img/userProfileNone.png';
import './NavBar.css';

const auth = getAuth(appFirebase);

const NavBar = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (userFirebase) => {
            setUser(userFirebase);
        });
        return () => unsubscribe();
    }, []);

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
        }
    };

    return (
        <div className="containerNavBar">
            <div className="titleNavBar">
                <Link to="/"><h2>Astralium</h2></Link>
            </div>
            <div className="userProfileImage">
                {user ? (
                    <div className='signOut'>
                        <button onClick={handleSignOut}>Sign Out</button>
                        <img src={userProfileNone} alt="Profile image of the User" />
                    </div>
                ) : (
                    <h3 style={{color: 'whitesmoke'}}>Welcome</h3>
                )}
            </div>
        </div>
    );
};

export default NavBar;
