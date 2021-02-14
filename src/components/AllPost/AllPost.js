import React, { Component } from 'react'
import { connect } from 'react-redux'

import Post from '../Post/Post'
import EditComponent from '../EditComponent/EditComponent'

import './AllPost.css'

class AllPost extends Component {
    render() {
        return (
            <div className="posts">
                <h1>All Post</h1>
                {this.props.posts.map((post) => (
                    <div key={post.id}>
                        {post.editing ? <EditComponent key={post.id} post={post} /> : <Post key={post.id} post={post} />}
                    </div>
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state

    }
}

export default connect(mapStateToProps)(AllPost);
