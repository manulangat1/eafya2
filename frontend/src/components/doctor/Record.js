import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { getSearch } from '../../actions/search'
import '../App.css'

class Record  extends React.Component{
    state= {
        search:""
    }
    onChange = e => this.setState({[e.target.name]:e.target.value})
    onSubmit =  e => {
        e.preventDefault()
        const {search} = this.state
        if (search == null){
            console.log("required")
        } else {
            this.props.getSearch(this.state.search)
            console.log("submitted")
        }
        

    }
    clear(){
        this.setState(this.props.search(""))
    }
    render(){
        return(
            <section className="recordz">
            <div className="container">
                <div >
                    <div className="grid-r">
                    <div>
                    <Link to="/" className="primary-btn" >back</Link>
                    </div>
                        <div>
                    <form onSubmit={this.onSubmit} className="form-inline md-form mr-auto mb-4">
                        <div className="form-group">
                            <input type="number" required className="form-control" name="search"  value={this.state.search} onChange={this.onChange} placeholder="enter hospital number" />
                        </div>
                        <input type="submit" value="search" className="btn aqua-gradient btn-rounded btn-sm my-0"/>
                    </form>
                    </div>
                </div>
                </div>
                <div >
                    <div className="reco-d">
                {
                    this.props.search.map(d => (
                        <div key={d.id}>
                        <h1>Patient Name:{d.name}</h1>
                        <p>Patient Hospital Number: {d.hospital_no}</p>
                        <div className="hospitalis">
                        {
                            d.history.map(his=>(
                                    <div >
                                    <div key={his.id}>
                                        <h1>Disease:{his.disease}</h1>
                                        <p>Treatment: <br/>{his.text}</p>
                                        {/* <hr /> */}
                                    </div>
                                    </div>
                                    ))
                            }
                        </div>
                        </div>
                    ))
                }
                </div>
                </div>
            </div>
            </section>
        )
    }
}
const mapStateToProps = state => ({
    search: state.search.details
})
export default connect(mapStateToProps,{getSearch})(Record) ;