import React from 'react'
import {connect} from 'react-redux'
import {getHome} from '../../actions/home'
import PropTypes from 'prop-types'
class Home  extends React.Component{
    static propTypes = {
        homes:PropTypes.array.isRequired
    }
    componentDidMount(){
        this.props.getHome()
    }
    render(){
        return(
            <div>
                {
                    this.props.homes.map(home => (
                        <div key={home.id}>
                            {home.name}
                        </div>
                    ))
                }
            </div>
        )
    }
}
const mapStateToprops = state =>({
    homes: state.home.home
})
export default connect(mapStateToprops,{getHome})(Home) ;