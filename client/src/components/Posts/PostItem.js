import Moment from 'react-moment'
import styles from './Posts.module.css'
import { ReactComponent as ThumbsUp } from '../../icons/thumbs-up.svg'
import { ReactComponent as ThumbsDown } from '../../icons/thumbs-down.svg'

const PostItem = ({ auth, post, handleLike, handleDislike }) => {
    return (
        <div className={styles['card']}>
            <div className={styles['left']}>
                <img className={styles['img']} src={post.avatar} alt="" />
                <span className={styles['name']}>{post.name}</span>
            </div>
            <div className={styles['right']}>
                <span className={styles['text']}>{post.text}</span>
                <span className={styles['date']}>Posted on <Moment format='DD/MM/YYYY'>{post.date}</Moment> </span>
                <div className={styles['btns']}>
                    <button className={styles['like']} onClick={() => handleLike(post._id)}><ThumbsUp className={styles['svg']} /> {post.likes.length} </button>
                    <button className={styles['like']} onClick={() => handleDislike(post._id)}><ThumbsDown className={styles['svg']} /> </button>
                    <button className={styles['comment']}> Discussions {post.comments.length} </button>
                    {
                        auth.isAuthenticated && auth.user && auth.user._id === post.user ?
                            <button className={styles['delete']}> &times; </button> : null
                    }
                </div>
            </div>
        </div>
    )
}

export default PostItem