import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import PostsComponent from '../components/Posts'
import { addLike, deleteLike, getPosts } from '../redux/actions/posts'

const Posts = (props) => {
    useEffect(() => {
        props.dispatch(getPosts(props.auth.token))
    }, [])

    const handleLike = (id) => {
        props.dispatch(addLike(props.auth.token, id))
    }
    const handleDislike = (id) => {
        props.dispatch(deleteLike(props.auth.token, id))
    }
    return (
        <PostsComponent
            auth={props.auth}
            posts={props.posts}
            handleLike={handleLike}
            handleDislike={handleDislike}
        />
    )
}

const mapStateToProps = state => {
    return {
        auth: state.authReducer,
        posts: state.postReducer.posts,
        post: state.postReducer.post,
    }
}

export default connect(mapStateToProps)(Posts)