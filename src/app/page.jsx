import Image from 'next/image';
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency.</h1>
        <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus eius impedit cupiditate sed esse eaque dolores nisi qui adipisci modi,</p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn more</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brand}>
          <Image src='/brands.png' alt='' fill className={styles.brandImg} />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src='/hero.gif' alt='' fill className={styles.heroImg} />
      </div>
    </div>
  )
};

export default Home