import React from 'react'
import ReactDOM from 'react-dom'

import Header from  './layout/Header'
import Footer from './layout/Footer'
import About from './layout/About'
import Help from './layout/Help'
import Dashboard from './doctor/Dashboard'
import AddRecord from './doctor/AddRecord'
import Alerts from './layout/Alerts'
import Login from  './accounts/Login'
import Register from  './accounts/Register'
import PrivateRoute from  './common/PrivateRoute'
import Form from './doctor/Form'
import Record from './doctor/Record'
//redux import s
import {Provider} from 'react-redux'
import store from '../store'
//react router imports
import { HashRouter as Router,Route,Switch,Redirect  } from 'react-router-dom'
// alert imports
import {loadUser} from '../actions/auth'

import {Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
/// alert options 
const alertOptions = {
    timeout: 3000,
    position: 'top center'
}
class App extends React.Component{
    componentDidMount(){
        store.dispatch(loadUser())
    }
    render(){
        return(
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Router>
            <div>
                <Header />
                <Alerts />
                <Switch>
                    <PrivateRoute exact path="/" component={Dashboard} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/help" component={Help}/>
                    <PrivateRoute exact path="/addPatient" component={Form} />
                    <PrivateRoute exact path="/history" component={Record} />
                    <PrivateRoute exact path="/addRecords" component={AddRecord} />
                </Switch>
                <Footer />
            </div>
            </Router>
            </AlertProvider>
            </Provider>
        )
    }
}
ReactDOM.render(<App />,document.getElementById('app'))