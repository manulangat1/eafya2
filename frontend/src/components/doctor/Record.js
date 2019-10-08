import React from 'react'
import {connect} from 'react-redux'
import {getRecords} from '../../actions/record'
class Record  extends React.Component{
    componentDidMount(){
        this.props.getRecords()
    }
    render(){
        return(
            <div>
                {
                    this.props.records.map(record => (
                        <div key={record.id}>
                            {record.patient}
                        </div>
                    ))
                }
            </div>
        )
    }
}
const mapStateToProps = state => ({
    records: state.record.record
})
export default connect(mapStateToProps,{getRecords})(Record) ;