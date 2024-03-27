import Image from 'next/image'
import styles from './postCard.module.css'
import Link from 'next/link'

const PostCard = () => {
    return <div className={styles.container}>
        <div className={styles.top}>
            <div className={styles.imgContainer}>
                <Image src='https://images.pexels.com/photos/19077234/pexels-photo-19077234/free-photo-of-sunset-over-the-sea.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' fill className={styles.img} />
            </div>
            <span className={styles.date}>01.01.2024</span>
        </div>
        <div className={styles.bottom}>
            <h1 className={styles.title}>Title</h1>
            <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem porro, architecto atque similique error omnis.</p>
            <Link href='/blog/post' >READ MORE</Link>
        </div>
    </div>
}

export default PostCard