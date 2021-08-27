import React from 'react'

function NavBarChild(props) {
    return (
        <form>
            <input type="text" id="name" name="name" placeholder="Your username" />
            <input type="password" id="password" name="password" placeholder="password" />
            <button onClick={props.updateState}>Log In</button>
        </form>
    )
}

export default NavBarChild
