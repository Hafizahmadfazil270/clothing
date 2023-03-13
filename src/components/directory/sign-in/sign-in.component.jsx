import React from "react";
import './sign-in.styles.scss'
import FormInput from "../../form-input/form-input.component";
import CunstomButton from "../../custom-button/custom-button.component";
class Signin extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email:'',
            password : ''
        }
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        this.setState({email:'',password:''})
    }
 
    handleChange = (event) =>{
        const {value,name} = event.target;
        this.setState({[name]:value})
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sing in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput label={'email'} type="email" value={this.state.email} name="email" handleChange={this.handleChange} required />
                    
                    <FormInput label={'password'} type="password" value={this.state.password} name="password" handleChange={this.handleChange} required />
                    
                    {/* <input type="submit" value="Submit form" /> */}
                    <CunstomButton type="submit">Sign In</CunstomButton>
                </form>
            </div>
        )
    }
}
export default Signin;