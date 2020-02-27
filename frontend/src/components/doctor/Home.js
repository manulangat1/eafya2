import React from 'react'
import {connect} from 'react-redux'
import {getHome} from '../../actions/home'
import PropTypes from 'prop-types'
import '../App.css'
class Home  extends React.Component{
    static propTypes = {
        homes:PropTypes.array.isRequired
    }
    componentDidMount(){
        this.props.getHome()
    }
    render(){
        return(
            <div id="home">
                <div className="container">
                    <div className="homes">
                {
                    this.props.homes.map(home => (
                        <div key={home.id}>
                            <img src={home.pic} />
                           <h2>{home.id}.{home.name}</h2> 
                           <p>{home.text}</p>
                           <p>{home.pub_date.toString() }</p>
                        </div>
                    ))
                }
                </div>
                </div>
            </div>
        )
    }
}
const mapStateToprops = state =>({
    homes: state.home.home
})
export default connect(mapStateToprops,{getHome})(Home) ;