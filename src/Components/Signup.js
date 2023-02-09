import React, { Component } from 'react';
import { TextField, Grid, Button } from '@mui/material/';

class Signup extends Component {
    state = {
        name: "",
        dob: "",
        email: "",
        contact: "",
        desc: "",
        formValid: false,
        error: {
            nameError: false,
            nameErrorText: "",
            dateOfBirthErrorText: "",
            emailError: false,
            emailErrorText: "",
            contactError: false,
            contactErrorText: "",
            descError: false,
            descErrorText: ""
        }
    }

    handleClick = title => {
        this.props.updateTitle(title);
    }

    handleChange = e => {
        let inputId = e.target.id.split(" ")[0];

        if (inputId == "name") {
            this.validateName(e.target.value);
        } else if (inputId == "email") {
            this.validateEmail(e.target.value);
        } else if (inputId == "contact") {
            this.validateContact(e.target.value);
        } else if (inputId == "desc") {
            this.validateDesc(e.target.value);
        } else if (inputId == "dob") {
            this.validateDob(e.target.value);
        }

    }

    validateName = (nameInput) => {
        let formValid = this.state.formValid;
        let nameError = this.state.error.nameError;
        let nameErrorText = this.state.error.nameErrorText;

        let pattern = /^[a-zA-Z\s]*$/;

        if (nameInput.trim() == "") {
            nameError = true;
            nameErrorText = "This is Required";
            formValid = false;
        } else if (!pattern.test(nameInput)) {
            nameError = true;
            nameErrorText = "This is Invalid";
            formValid = false;
        } else {
            nameError = false;
            nameErrorText = "";
            formValid = true;
        }

        this.setState({
            name: nameInput,
            formValid,
            error: {
                ...this.state.error,
                nameError,
                nameErrorText
            }
        })

        return formValid;
    }

    validateEmail = (emailInput) => {
        let formValid = this.state.formValid;
        let emailError = this.state.error.emailError;
        let emailErrorText = this.state.error.emailErrorText;

        let pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

        if (emailInput.trim() == "") {
            emailError = true;
            emailErrorText = "This is Required";
            formValid = false;
        } else if (!pattern.test(emailInput)) {
            emailError = true;
            emailErrorText = "This is Invalid";
            formValid = false;
        } else {
            emailError = false;
            emailErrorText = "";
            formValid = true;
        }

        this.setState({
            email: emailInput,
            formValid,
            error: {
                ...this.state.error,
                emailError,
                emailErrorText
            }
        })

        return formValid;
    }

    validateContact = (contactInput) => {
        let formValid = this.state.formValid;
        let contactError = this.state.error.contactError;
        let contactErrorText = this.state.error.contactErrorText;

        let pattern = /^[0-9]*$/;

        if (contactInput.trim() == "") {
            contactError = true;
            contactErrorText = "This is Required";
            formValid = false;
        } else if (!pattern.test(contactInput) || contactInput.length != 10) {
            contactError = true;
            contactErrorText = "This is Invalid";
            formValid = false;
        } else {
            contactError = false;
            contactErrorText = "";
            formValid = true;
        }

        this.setState({
            contact: contactInput,
            formValid,
            error: {
                ...this.state.error,
                contactError,
                contactErrorText
            }
        })

        return formValid;
    }

    validateDesc = (descInput) => {
        let formValid = this.state.formValid;
        let descError = this.state.error.descError;
        let descErrorText = this.state.error.descErrorText;

        if (descInput.trim() == "") {
            descError = true;
            descErrorText = "This is Required";
            formValid = false;
        } else if (descInput.length > 250) {
            descError = true;
            descErrorText = "This is Invalid";
            formValid = false;
        } else {
            descError = false;
            descErrorText = "";
            formValid = true;
        }

        this.setState({
            desc: descInput,
            formValid,
            error: {
                ...this.state.error,
                descError,
                descErrorText
            }
        })

        return formValid;
    }

    validateDob = (dobInput) => {
        let formValid = this.state.formValid;
        let dateOfBirthErrorText = this.state.error.dateOfBirthErrorText;
        let formattedDob = new Date(dobInput);
        let timeElapsed = Date.now();
        let today = new Date(timeElapsed);

        if (dobInput.trim() == "") {
            dateOfBirthErrorText = "This is Required";
            formValid = false;
        } else if (formattedDob > today) {
            dateOfBirthErrorText = "This is Invalid";
            formValid = false;
        } else {
            dateOfBirthErrorText = "";
            formValid = true;
        }

        this.setState({
            dob: dobInput,
            formValid,
            error: {
                ...this.state.error,
                dateOfBirthErrorText
            }
        })

        return formValid;
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if (
            this.validateName(this.state.name) &&
            this.validateEmail(this.state.email) &&
            this.validateContact(this.state.contact) &&
            this.validateDesc(this.state.desc) &&
            this.validateDob(this.state.dob)
        ) {
            alert('Account is Successfully created');

            this.setState({
                name: "",
                dob: "",
                email: "",
                contact: "",
                desc: ""
            });
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h3>Account Sign up</h3>
                    <Grid container spacing={2}>
                        <Grid item xs={2}>
                            <TextField
                                required
                                id="name standard-required"
                                label="Name"
                                variant="standard"
                                sx={{ margin: "5px" }}
                                error={this.state.error.nameError}
                                helperText={this.state.error.nameErrorText}
                                onChange={this.handleChange}
                                value={this.state.name}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <p>Date of Birth</p>
                            <input type="date" max={new Date().toISOString().split("T")[0]} id="dob" onChange={this.handleChange} value={this.state.dob} />
                            <p style={{ color: "red", fontSize: "13px" }}>{this.state.error.dateOfBirthErrorText}</p>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={2}>
                            <TextField
                                required
                                id="email standard-required"
                                label="Email"
                                variant="standard"
                                sx={{ margin: "5px" }}
                                error={this.state.error.emailError}
                                helperText={this.state.error.emailErrorText}
                                onChange={this.handleChange}
                                value={this.state.email}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <TextField
                                required
                                id="contact standard-required"
                                label="Contact Number"
                                variant="standard"
                                sx={{ margin: "5px" }}
                                error={this.state.error.contactError}
                                helperText={this.state.error.contactErrorText}
                                onChange={this.handleChange}
                                value={this.state.contact}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                required
                                fullWidth
                                id="desc standard-multiline-static"
                                label="Tell me about yourself"
                                variant="standard"
                                multiline
                                rows={3}
                                error={this.state.error.descError}
                                helperText={this.state.error.descErrorText}
                                onChange={this.handleChange}
                                value={this.state.desc}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={2} style={{ margin: "10px" }}>
                            <Button variant="contained" type="submit">Sign up</Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        );
    }
}

export default Signup;