import React, { Component } from 'react'
import { connect } from 'react-redux'

import './PostForm.css'

class PostForm extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const message = this.getMessage.value;
        const data = {
            id: new Date(),
            title,
            message,
            editing: false
        }
        this.props.dispatch({
            type: 'ADD_POST',
            data
        })
        this.getTitle.value = ""
        this.getMessage.value = ""

    }

    render() {
        return (
            <div className="PostForm-Container">
                <h1>Create Post</h1>
                <form onSubmit={this.handleSubmit}>
                    <input className="title-form" type="text" ref={(input) => this.getTitle = input} placeholder="Enter Title" required />
                    <br /><br />
                    <textarea className="text-form" cols="30" rows="5" ref={(input) => this.getMessage = input} placeholder="Enter Post ..." required />
                    <br /><br />
                    <button className="form-btn">Post</button>
                </form>
            </div>
        )
    }
}

export default connect()(PostForm)
