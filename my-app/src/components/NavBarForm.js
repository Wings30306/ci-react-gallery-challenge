import { Component } from "react"
import css from "./css/NavBarForm.module.css"
import LoginButton from "./LoginButton"

class NavBarForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: true,
        }
        this.updateState = this.updateState.bind(this)
    }

    updateState() {
        this.setState(oldState => ({
            loggedIn: !oldState.loggedIn
        }))
    }
    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                <div>
                    <span>{this.state.message}, {this.state.name}</span>
                    <LoginButton updateState={this.updateState} isLoggedIn={this.state.loggedIn} />
                </div>
            </div>
        )
    }
}

export default NavBarForm