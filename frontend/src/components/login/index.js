import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default class LoginComponent extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    updateEmail = (event) => {
        this.setState({ email: event.target.value });
    };

    updatePassword = (event) => {
        this.setState({ password: event.target.value });
    };

    render() {
        return (
            <form noValidate autoComplete="off">
                <TextField
                    id="email"
                    label="Email"
                    type="email"
                    autoComplete="email"
                    onChange={this.updateEmail}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="password"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    onChange={this.updatePassword}
                    margin="normal"
                    variant="outlined"
                />
                <Button variant="contained" color="primary">
                    Submit
                </Button>
            </form>
        );
    }
}