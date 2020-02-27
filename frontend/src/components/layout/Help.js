import React from 'react'
import '../App.css'
import { connect } from 'react-redux'
import {getHelp } from '../../actions/help'

class Help extends React.Component{
    componentDidMount(){
        this.props.getHelp()
    }
    render(){
        return(
            <div className="container">
                <div className="help">
                {
                    this.props.help.map(he =>(
                        <div>
                            <h1>{he.name}.</h1>
                            <p>{he.text}</p>
                        </div>
                    ))
                }
                </div>
            </div>
        )
    }
}
const mapStateToProps= state => ({
    help: state.help.help
})
export default connect(mapStateToProps,{getHelp})(Help);