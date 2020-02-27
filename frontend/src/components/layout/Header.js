import React from 'react'
import '../App.css'
import {connect} from 'react-redux'
import {logout} from '../../actions/auth'
import Record from '../doctor/Record'
import {Link} from "react-router-dom"
class Header extends React.Component{
    render(){
        const {isAuthenticated,user} = this.props.auth

        const authLinks = (
            <ul className="link">
            {/* <Record /> */}
            <li> <Link to="/addPatient">Add Patient</Link> </li>
            <li> <Link to="/history">Get Hisory</Link> </li>
            <li><Link to="/addRecords">Add a record</Link></li>
            <li><button className="primary-btn" onClick={this.props.logout}>Logout</button></li>
        </ul>
        )
        const guestLinks = (
                    <ul className="link">
                    <li> <Link to="/register">Register</Link> </li>
                    <li> <Link to="/login">Login</Link> </li>
                </ul>
        )
        return(
            <nav>
                <div className="container">
                    <h1>Eafya Kenya</h1>
                    {
                        isAuthenticated ? authLinks : guestLinks
                    }           
                </div>
            </nav>
        )
    }
}
const mapStateToProps = state => ({
    auth: state.auth
})
export default connect(mapStateToProps,{logout})(Header);