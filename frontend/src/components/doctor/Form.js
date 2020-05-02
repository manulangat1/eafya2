import React from 'react'
import {connect} from 'react-redux'
import {addPatient} from '../../actions/patient'
import '../App.css'
import moment from 'moment';
class Form  extends React.Component{
    state = {
        name: "",
        email:"",
        id_no: "",
        date_of_birth: "",
        location: "",
        phone_number:""
    }
    onChange = e => this.setState({[e.target.name]:e.target.value})
    onSubmit = e => {
        e.preventDefault();
        const {name,email,id_no,date_of_birth,location,phone_number} = this.state;
        const patient ={ name,email,id_no,date_of_birth,location,phone_number };
        this.props.addPatient(patient)
        console.log('submit')
        this.setState({name:'',email:'',id_no:'',date_of_birth:'',phone_number:"",location:''})
    }
    render(){
        const {name,email,id_no,date_of_birth,phone_number,location} = this.state
        const tempDate = new Date();
        // const date = tempDate.getFullYear() + '-' + tempDate.getMonth() + '-' + tempDate.getDate();
        const today = tempDate.getDate() + '/' + tempDate.getMonth()  + '/' + tempDate.getFullYear();
        return(
            <section>
            <div id="add">
                <div className="container">
                    <div className="logo">
                        <h1>Add a patient</h1>
                    </div>
                    <form onSubmit={this.onSubmit} >
                        <div className="form-group">
                            <label>Full Name</label>
                            <input className="form-control" required placeholder="Enter patients full name" type="text" name="name" onChange={this.onChange} value={name} />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input className="form-control"  placeholder="Enter patients email" type="email" name="email" onChange={this.onChange} value={email} />
                        </div>
                        <div className="form-group">
                            <label>Id Number </label>
                            <input className="form-control" placeholder="Enter patients Id number" type="number" name="id_no" onChange={this.onChange} value={id_no} />
                        </div>
                        <div className="form-group">
                            <label>Date of birth</label>
                            <input className="form-control" type="date" max={moment().format("YYYY-MM-DD")} required name="date_of_birth" onChange={this.onChange} value={date_of_birth} />
                        </div>
                        <div className="form-group">
                            <label>Phone Number</label>
                            <input className="form-control" type="tel"  placeholder="Enter patients/guardians phone number" name="phone_number" onChange={this.onChange} value={phone_number} />
                        </div>
                        <div className="form-group">
                            <label>Location</label>
                            <input className="form-control" type="text" name="location" onChange={this.onChange}  placeholder="Enter patients current" required value={location} />
                        </div>
                        <input type="submit" value="Add Patient" className="primary-btn"/>
                    </form>
                </div>
            </div>
            </section>
        )
    }
}
export default connect(null,{addPatient}) (Form) ;