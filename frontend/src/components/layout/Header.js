import React from 'react'

class Header extends React.Component{
    render(){
        return(
            <nav>
                <div className="container">
                    <h1></h1>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Patients</a></li>
                        <li><a href="#">Logout</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Header;