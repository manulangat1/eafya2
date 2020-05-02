import React from 'react'
import { connect } from 'react-redux'
import { addAppoint,getAppoint } from '../../actions/appoint'
import '../App.css'
import moment from 'moment';
class AddAppoint extends React.Component{
    componentWillMount(){
        this.props.getAppoint()
    }
    state = {
        patient:"",
        appointment_date:"",
        appointment_time:""
    }
    onChange = e => this.setState({[e.target.name]:e.target.value})
    onSubmit = e => {
        e.preventDefault()
        const {appointment_date,appointment_time,patient} = this.state
        const appointment = {
            appointment_date,appointment_time,patient
        }
        this.props.addAppoint(appointment)
        this.setState({
            patient:"",
            appointment_date:"",
            appointment_time:""
        })
    }
    render(){
        const {appointment_date,appointment_time,patient} = this.state
        return(
            <section id="add">
                <h1>Add an appointment here</h1>
                <form onSubmit={this.onSubmit}>
                <div>
                    <label>Patient Number</label>
                        <input required type="number" placeholder="Enter the patients number here" className="form-control" name="patient" value={patient} onChange={this.onChange} />
                    </div>
                    <div>
                        <label>Appointment Date</label>
                        <input required type="date" min={moment().format("YYYY-MM-DD")} placeholder="Enter appointment date here" className="form-control" name="appointment_date" value={appointment_date} onChange={this.onChange}/>
                    </div>
                    <div>
                        <label>Appointment Time</label>
                        <input required type="time" placeholder="Enter appointment time here" className="form-control" name="appointment_time" value={appointment_time} onChange={this.onChange}/>
                    </div>
                    <button type="submit" className="primary-btn"> Submit</button>
                </form>
            </section>
        )
    }
}
const mapStateToProps = state => ({
    Ad: state.appoint.appoints,
    ads:state.appoint.appoint
})
export default connect(mapStateToProps,{addAppoint,getAppoint})(AddAppoint)