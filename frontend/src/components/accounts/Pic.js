import React from 'react'
import {getPic } from '../../actions/pic'
import { connect } from 'react-redux'
import '../App.css'
class Pic extends React.Component{
    componentDidMount(){
        this.props.getPic()
    }
    render(){
        return(
            <div id="showcase">
                <div id="showcase-content">
                {
                    this.props.pics.map(pi=>(
                        <div key={pi.id}>
                            <div className="bg-image" style={{backgroundImage: `url(${pi.pic})`}}>
                            <h1 className="showcase-text">{pi.text}</h1>
                            <a href="#" className="secondary-btn">Start a free Ten day Trial</a>
                            {/* <img src={pi.pic} /> */}
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    pics: state.pic.pic
})
export default connect(mapStateToProps,{ getPic })(Pic)