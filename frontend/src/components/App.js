import React from 'react'
import ReactDOM from 'react-dom'

import Header from  './layout/Header'
import Footer from './layout/Footer'
import Dashboard from './doctor/Dashboard'
//redux import s
import {Provider} from 'react-redux'
import store from '../store'
class App extends React.Component{
    render(){
        return(
            <Provider store={store}>
            <div>
                <Header />
                <Dashboard />
                <Footer />
            </div>
            </Provider>
        )
    }
}
ReactDOM.render(<App />,document.getElementById('app'))