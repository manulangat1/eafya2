import React from 'react'
import Form from './Form'
import Home from './Home'
import Record from './Record'
import Patient from './Patient'
class Dashboard extends React.Component{
    render(){
        return(
            <div>
                <Home />
                <Form />
                <Record />
                <Patient />
            </div>
        )
    }
}
export default Dashboard;