import React from 'react'
import {connect} from 'react-redux'
import {login} from '../../actions/auth'
import {Link,Redirect} from 'react-router-dom'
import Pic from './Pic'
import '../App.css'
class Login extends React.Component{
    state = {
        username:"",
        password:""
    }
    onChange = e => this.setState({[e.target.name]:e.target.value})
    onSubmit = e => {
        e.preventDefault();
        const {username,password} = this.state
       this.props.login(username,password)
       this.setState({username:"",password:""})
    }
    render(){
        if (this.props.isAuthenticated){
            return <Redirect to="/" />
        }
        const {username,password} = this.state
        return(
            <div id="wrapper">
                <div id="left">
                <div id="signin">
                    <div className="logo">
                        <h1>Login</h1>
                    </div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                    <label>Name</label>
                    <input className="form-control" type="text" name="username" onChange={this.onChange} value={username} />
                    </div>
                    <div className="form-group">
                    <label>Password</label>
                    <input className="form-control" type="password" name="password" onChange={this.onChange} value={password} />
                    </div>
                    <input type="submit" value="submit" className="primary-btn" />
                </form>
                <div className="links">
                        <a href="#">Dont have an account Register</a>
                        <a href="#">Dont have an account Register</a>
                    </div>
                    <div className="or">
                        <hr className="bar"></hr>
                        <span>OR</span>
                        <hr className="bar"></hr>
                    </div>
                    <Link to="/register" className="secondary-btn">Create an account</Link>
                </div>
                <footer id="main-footer">
                    <p>Copyright &copy;2019, Eafya Systems All right reservered</p>
                    <a href="#">Terms of use</a> | <a href="#">Privacy Policy</a> 
                </footer>
                </div>
                <div id="right">
                    <Pic />
                </div>
            </div>
        )
    }
}
const mapStateToprops = state => ({
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToprops,{login})(Login)