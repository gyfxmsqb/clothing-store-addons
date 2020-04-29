import React, { Component } from 'react'

import "./sign-in.scss"
import FormInput from '../form-input/form-input'
import { CustomButton } from '../custom-button/custom-button'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends Component {


    constructor(props) {
        super()
        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = async event => {
        event.preventDefault()
        this.setState({ email: "", password: "" })

        const { email, password } = this.state

        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({ email: "", password: "" })
        } catch (error) {
            alert(error.message);

        }

    }

    handleChange = (event) => {

        //decontruct the values 
        const { value, name } = event.target
        this.setState({ [name]: value })

    }

    render() {

        return (


            <div className="sign-in">
                <h2>I already have an account</h2>
                <span className="title">Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit} >
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="email"
                        required />


                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label="password"

                        required />


                    <div className="buttons">

                        <CustomButton type="submit" value="Submit Form" >
                            Sign In
                    </CustomButton>

                        <CustomButton
                            type="button"
                            onClick={signInWithGoogle}
                            isGoogleSignIn>
                            Sign In with Google
                    </CustomButton>
                    </div>


                </form>


            </div>
        )
    }

}
export default SignIn