import React from 'react'
import NavBarChild from './NavBarChild'

function LoginButton(props) {
    return (
        <div>
            {props.isLoggedIn ? (
                <button onClick={props.updateState}>
                    Log Out
                </button>
            ) : (
                <NavBarChild updateState={props.updateState} />
            )}
            
        </div>
    )
}

export default LoginButton