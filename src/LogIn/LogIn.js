import React , {Component} from 'react';
import * as loginService from '../Services/LoginService';
import './LogIn.css'
class Login extends Component {
    constructor(props) {
        
        super(props);
        this.state = {
            email: '',
            password: ''
        }
   
}
handleEmailChange = event =>{

    this.setState({
       email : event.target.value
    });
   console.log(this.state);
}
handlePasswordChange = event =>{

    this.setState({
       password : event.target.value
    });
    console.log(this.state);
}
submitForm = (event) =>{
    event.preventDefault();
    loginService.LogIn("","");
   console.log(this.state);
}

    render()
    {
        return (
            <div className="margin wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
            <form onSubmit = {this.submitForm} className=" login100-form validate-form">
                <span className="login100-form-title p-b-33">
                    Account Login
                        </span>
                <div className="wrap-input100 validate-input">
                    <input className="input100" type="text" 
                     name="email"  placeholder="Email" onChange = { this.handleEmailChange}/>
                    <span className="focus-input100-1"></span>
                    <span className="focus-input100-2"></span>
                </div>
                <div className="wrap-input100 rs1 validate-input">
                    <input className="input100" type="password"  
                    name="pass" placeholder="Password" onChange ={ this.handlePasswordChange }/>
                    <span className="focus-input100-1"></span>
                    <span className="focus-input100-2"></span>
                </div>
                <div className="container-login100-form-btn m-t-20">
                    <button className="login100-form-btn" type="submit" >
                        Sign in
                    </button>

                </div>
            </form>
        </div>
        );
    }
}

export default Login;