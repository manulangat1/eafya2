import React from 'react'
import {connect} from 'react-redux'
import {addPatient} from '../../actions/patient'
import '../App.css'
class Form  extends React.Component{
    state = {
        name: "",
        email:"",
        id_no: "",
        date_of_birth: "",
        location: ""
    }
    onChange = e => this.setState({[e.target.name]:e.target.value})
    onSubmit = e => {
        e.preventDefault();
        const {name,email,id_no,date_of_birth,location} = this.state;
        const patient ={ name,email,id_no,date_of_birth,location };
        this.props.addPatient(patient)
        console.log('submit')
        this.setState({name:'',email:'',id_no:'',date_of_birth:'',location:''})
    }
    render(){
        const {name,email,id_no,date_of_birth,location} = this.state
        return(
            <section>
            <div id="add">
                <div className="container">
                    <div className="logo">
                        <h1>Add a patient</h1>
                    </div>
                    <form onSubmit={this.onSubmit} >
                        <div className="form-group">
                            <label>Name</label>
                            <input className="form-control" type="text" name="name" onChange={this.onChange} value={name} />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input className="form-control" type="email" name="email" onChange={this.onChange} value={email} />
                        </div>
                        <div className="form-group">
                            <label>Id Number </label>
                            <input className="form-control" type="number" name="id_no" onChange={this.onChange} value={id_no} />
                        </div>
                        <div className="form-group">
                            <label>Date of birth</label>
                            <input className="form-control" type="date" name="date_of_birth" onChange={this.onChange} value={date_of_birth} />
                        </div>
                        <div className="form-group">
                            <label>Location</label>
                            <input className="form-control" type="text" name="location" onChange={this.onChange} value={location} />
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