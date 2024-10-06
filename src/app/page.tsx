

import Image from 'next/image';
import styles from '@/app/styles/Home.module.css';

const Home = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Welcome to Digital Solutions Agency</h1>
      <p className={styles.description}>
        At Digital Solutions Agency, we specialize in transforming your online presence into a powerful engine for growth. Our dedicated team of experts is here to provide tailored solutions in:
      </p>
      <div className={styles.services}>
        <div className={styles.serviceCard}>
        <Image
              className="object-cover object-center rounded mx-auto w-[300px] h-[400px]"
              alt="Search Engine Optimization"
              src={require("../public/images/seo.jpeg")}
              width={300}
              height={500}
          />
          <h3 className={styles.serviceTitle}>SEO Optimization</h3>
          <p className={styles.serviceDescription}>
            Enhance your visibility on search engines and attract quality traffic to your website.
          </p>
        </div>
        <div className={styles.serviceCard}>
        <Image
              className="object-cover object-center rounded mx-auto w-[300px] h-[400px]"
              alt="Graphic Designing"
              src={require("../public/images/graphic-design.jpeg")}
              width={300}
              height={500}
          />
          <h3 className={styles.serviceTitle}>Graphic Designing</h3>
          <p className={styles.serviceDescription}>
            Captivate your audience with stunning visuals that convey your brand message effectively.
          </p>
        </div>
        <div className={styles.serviceCard}>
        <Image
              className="object-cover object-center rounded mx-auto w-[300px] h-[400px]"
              alt="Social Media Marketing"
              src={require("../public/images/social-media.jpeg")}
              width={300}
              height={500}
          />
          <h3 className={styles.serviceTitle}>Social Media Marketing</h3>
          <p className={styles.serviceDescription}>
            Build a strong online presence and engage with your customers through strategic campaigns.
          </p>
        </div>
        <div className={styles.serviceCard}>
        <Image
              className="object-cover object-center rounded mx-auto w-[300px] h-[400px]"
              alt="Video Editing"
              src={require("../public/images/video-editing.jpeg")}
              width={300}
              height={500}
          />
          <h3 className={styles.serviceTitle}>Video Editing</h3>
          <p className={styles.serviceDescription}>
            Create impactful video content that tells your story and resonates with your audience.
          </p>
        </div>
      </div>
      <p className={styles.cta}>
        Ready to take your business to the next level? <strong>Contact us today!</strong>
      </p>
    </section>
  );
};

export default Home;
