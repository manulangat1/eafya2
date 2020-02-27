import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
class Footer extends React.Component{
    render(){
        return(
            <div>
                <footer id="m-footer">
                <p>&copy; Eafya kenya solutions</p>
                <div className="links">
                   <p><Link to="/about" className="link">About</Link></p>
                   <p><Link to ="/help"className="link">Help</Link></p>
                </div>
                </footer>
            </div>
        )
    }
}
export default Footer;