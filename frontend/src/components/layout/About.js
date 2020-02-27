import React from 'react'
import '../App.css'
import { connect } from 'react-redux'
import {getAbout } from '../../actions/about'

class About extends React.Component{
    componentDidMount(){
        this.props.getAbout()
    }
    render(){
        return(
            <div className="container">
                <div className="about">
                {
                    this.props.about.map(he =>(
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
    about: state.about.about
})
export default connect(mapStateToProps,{getAbout})(About);