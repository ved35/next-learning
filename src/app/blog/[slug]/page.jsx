import Image from 'next/image';
import styles from './single.module.css'

const SinglePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src='https://images.pexels.com/photos/19077234/pexels-photo-19077234/free-photo-of-sunset-over-the-sea.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' fill className={styles.img} />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Title</h1>
                <div className={styles.detail}>
                    <Image src='https://images.pexels.com/photos/19077234/pexels-photo-19077234/free-photo-of-sunset-over-the-sea.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' width={50} height={50} className={styles.avatar} />
                    <div className={styles.detailtext}>
                        <span className={styles.detailtitle}>Author</span>
                        <span className={styles.detailvalue}>Rio</span>
                    </div>
                    <div className={styles.detailtext}>
                        <span className={styles.detailtitle}>Published</span>
                        <span className={styles.detailvalue}>01.01.2020</span>
                    </div>
                </div>
                <div className={styles.content}>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quas suscipit! Exercitationem sint temporibus minus deleniti! Repudiandae architecto aperiam accusantium, necessitatibus ex ut quos quas. </p>
                </div>
            </div>
        </div>
    );
};

export default SinglePage;