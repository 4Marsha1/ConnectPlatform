import PostItem from './PostItem'
import styles from './Posts.module.css'

const index = ({ auth, posts, handleLike, handleDislike }) => {
    return (
        <div className={styles['container']}>
            <span className={styles['header']}>Posts</span>
            <span className={styles['sub']}>Welcome to Connect Platform!</span>

            {/* Create Post Form  */}

            {
                posts.map((post, idx) => {
                    return <PostItem
                        key={idx}
                        post={post}
                        auth={auth}
                        handleLike={handleLike}
                        handleDislike={handleDislike}
                    />
                })
            }
        </div>
    )
}

export default index