import React, { Component } from 'react';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.usernameInput = React.createRef();
        this.state = {
            username: '',
            password: '',
        };
    }

    handleUsernameChange = (e) => {
        this.setState({ username: e.target.value });
    };

    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const username = this.usernameInput.current.value;
        
        console.log(`Въведено потребителско име ${username}`);
        
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <div>
                    <label>Потребителско име:</label>
                    <input 
                        type="text"
                        value={this.state.username}
                        onChange={this.handleUsernameChange}
                        ref={this.usernameInput}
                    />
                </div>
                <div>
                    <label>Парола:</label>
                    <input 
                        type="password"
                        value={this.state.password}
                        onChange={this.handlePasswordChange}
                    />
                </div>
                <button type="submit">Вход</button>

            </form>
        );
    }
}

export default LoginForm;