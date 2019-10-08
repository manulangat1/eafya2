import React from 'react'

import {connect} from 'react-redux'
import {getPatient} from '../../actions/patient'

class Patient extends React.Component{
    componentDidMount(){
        this.props.getPatient()
    }
    render(){
        return(
            <div>
                {
                    this.props.patients.map(patient => (
                        <div key={patient.id}>
                            {patient.name}
                        </div>
                    ))
                }
            </div>
        )
    }
}
const mapStateToProps = state => ({
    patients: state.patient.patient
})
export default connect(mapStateToProps,{getPatient})(Patient);