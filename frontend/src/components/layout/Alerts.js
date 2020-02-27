import React from 'react'
import {withAlert} from 'react-alert'
import { connect } from 'react-redux'

class Alerts extends React.Component{

    componentDidUpdate(prevProps){
        const {error,alert,message} = this.props
        if( error != prevProps.error){
            if (error.msg.name) alert.error(`Name: ${error.msg.name.join()}`)
            if (error.msg.location) alert.error(`Email: ${error.msg.location.join()}`)
            if (error.msg.id_no) alert.error(`ID: ${error.msg.id_no.join()}`)
            if (error.msg.date_of_birth) alert.error(`Date: ${error.msg.date_of_birth.join()}`)
            if (error.msg.message) alert.error(`Message: ${error.msg.message.join()}`)
            if (error.msg.non_field_errors) alert.error(error.msg.non_field_errors.join())
            if (error.msg.username) alert.error(error.msg.username.join())
        }
        if (message != prevProps.message){
            if(message.patientAdded) alert.success(message.patientAdded)
            if(message.passwordNotMatch) alert.error(message.passwordNotMatch)
        }
    }
    render(){
        return(
            <div>
                
            </div>
        )
    }
}
const mapStateToProps  = state => ({
    error: state.errors,
    message: state.messages
})
export default connect (mapStateToProps) (withAlert()(Alerts));