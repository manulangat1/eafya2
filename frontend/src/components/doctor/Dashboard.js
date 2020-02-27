import React from 'react'
import Home from './Home'
import Record from './Record'
import Patient from './Patient'
import '../App.css'
class Dashboard extends React.Component{
    render(){
        return(
            <div>
                <div id="dashboard">
                <Home />
                </div>
            </div>
        )
    }
}
export default Dashboard;