import Image from "next/image";
import styles from './about.module.css'

const About = () => {
    return (
        <div className={styles.container}> 
            <div className={styles.textContainer}>
                <h2 className={styles.title}>About Agency</h2>
                <h1 className={styles.subtitle}>We create digital ideas that are bigger, bolder, braver and better.</h1>
                <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo repudiandae asperiores ipsum dolorum magnam repellat voluptas nam sequi ipsa cum. Maxime, deserunt consequatur. Distinctio, veritatis!</p>
                <div className={styles.boxes}>
                    <div className={styles.box}>
                        <h1>10k</h1>
                        <p>Year of Experience</p>
                    </div>
                    <div className={styles.box}>
                        <h1>10k</h1>
                        <p>Year of Experience</p>
                    </div>
                    <div className={styles.box}>
                        <h1>10k</h1>
                        <p>Year of Experience</p>
                    </div> 
                </div>
            </div>
            <div className={styles.imgContainer}>
                <Image src='/about.png' alt="" fill className={styles.imges} />
            </div>
        </div>
    );
};

export default About;
