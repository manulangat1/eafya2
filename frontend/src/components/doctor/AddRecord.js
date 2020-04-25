import React from 'react'
import {connect} from 'react-redux'
import {addRecord} from '../../actions/addRecord'
import { Link} from 'react-router-dom'
import '../App.css'

class AddRecord  extends React.Component{
    state = {
        patient: "",
        disease:"",
        text: ""
    }
    onChange = e => this.setState({[e.target.name]:e.target.value})
    onSubmit = e => {
        e.preventDefault();
        const {patient,disease,text} = this.state;
        const patients ={ patient,disease,text };
        console.log(patient,text,disease)
        this.props.addRecord(patients)
        console.log('submit')
        this.setState({patient:'',text:'',disease:""})
    }
    render(){
        const {patient,text,disease} = this.state
        return(
            <section>
            <div id="add">
                <div className="container">
                    <div className="logo">
                        <h1>Add  patient records</h1>
                    </div>
                    <form onSubmit={this.onSubmit} >
                        <div className="form-group">
                            <label>Patient number</label>
                            <input placeholder="Enter patient number here" required className="form-control" type="number" name="patient" onChange={this.onChange} value={patient} />
                        </div>
                        <div className="form-group">
                            <label>disease suffering from</label>
                            <textarea placeholder="Enter disease patient is suffering from here" required className="form-control" type="text" name="disease" onChange={this.onChange} value={disease}/>
                        </div>
                        <div className="form-group">
                            <label>Prescription</label>
                            <textarea placeholder="Enter prescription  here" required className="form-control" type="text" name="text" onChange={this.onChange} value={text}/>
                        </div>
                        <input type="submit" value="Add Record" className="primary-btn"/>
                        <Link to="/add" className="primary-btn">Or add an appointment here</Link>
                    </form>
                </div>
            </div>
            
            </section>
        )
    }
}
export default connect(null,{addRecord}) (AddRecord) ;