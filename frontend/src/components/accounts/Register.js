import React from 'react'
import '../App.css'
import {connect} from 'react-redux'
import { register } from '../../actions/auth'
import {Link,Redirect} from 'react-router-dom'
import {createMessage} from '../../actions/messages'

class Register extends React.Component{
    state = {
        username:"",
        email:"",
        password:"",
        password2:""
    }
    onChange = e => this.setState({[e.target.name]:e.target.value})
    onSubmit = e => {
        e.preventDefault()
        const {username,email,password,password2} = this.state
        if (password != password2){
            this.props.createMessage({passwordNotMatch:"Passwords do not match"})
        } else {
            // console.log("submit");
            const newUser = {
                username,
                password,
                email
            }
            this.props.register(newUser)
            this.setState({username:"",email:"",password:"",password2:""})
            return <Redirect to="/" />
            
            
        }
        
    }
    render(){
        if (this.props.isAuthenticated){
            return <Redirect to="/" />
        }
        const {username,email,password,password2} = this.state
        return(
            <div id="register">
                <h2 className="logo">Register</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                    <label>Name</label>
                    <input  minlength="8" required placeholder="Enter your username here" className="form-control" type="text" name="username" onChange={this.onChange} value={username} />
                    </div>
                    <div className="form-group">
                    <label>Email</label>
                    <input required placeholder="Enter your email here" className="form-control" type="email" name="email" onChange={this.onChange} value={email} />
                    </div>
                    <div className="form-group">
                    <label>Password</label>
                    <input minlength="8" required placeholder="Enter your password here" type="password" className="form-control" name="password" onChange={this.onChange} value={password} />
                    </div>
                    <div className="form-group">
                    <label>Re-enter password to Confirm</label>
                    <input minlength="8" required placeholder="Confirm password" type="password" name="password2" className="form-control" onChange={this.onChange} value={password2} />
                    </div>
                    <input type="submit" value="submit" className="primary-btn" />
                </form>
                <p>Already have an account Login <Link to="/login">Here</Link></p>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps,{register,createMessage})(Register)