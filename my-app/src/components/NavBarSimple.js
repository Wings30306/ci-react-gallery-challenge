import { Component } from "react"
import css from "./css/NavBarSimple.module.css"

class NavBarSimple extends Component {

    constructor(props) {
        super(props)
        this.state = {
            message: "Hello",
            name: "guest",
            loggedIn: false,
        }
        this.updateState = this.updateState.bind(this)
    }

    updateState() {
        this.setState(oldState => ({
            message: oldState.message === "Hello" ? "Welcome Back" : "Hello",
            name: oldState.name === "guest" ? "user" : "guest",
            loggedIn: !oldState.loggedIn
        }))
    }
    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                <div>
                    <span>{this.state.message}, {this.state.name}</span>
                    <button onClick={this.updateState}>{this.state.loggedIn ? "Log Out" : "Log In"}</button>
                </div>
            </div>
        )
    }
}

export default NavBarSimple