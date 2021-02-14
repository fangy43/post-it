import React, { Component } from 'react'
import {connect} from 'react-redux'

import './Post.css'

class Post extends Component {
    render() {
        return (
            <div className="post">
                <button className="delete-btn" onClick={()=>this.props.dispatch({type:'DELETE_POST',id:this.props.post.id})}>
                    <i class="fa fa-close"></i>
                </button>
                <button className="edit-btn" onClick={()=>this.props.dispatch({type:'EDIT_POST',id:this.props.post.id})} >
                    <i class="fa fa-pencil" aria-hidden="true"></i>
                </button>
                <br/>
                <h2>{this.props.post.title}</h2>
                <hr/>
                <p>{this.props.post.message}</p>
            </div>
        )
    }
}

export default connect()(Post)
