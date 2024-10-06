
import styles from '@/app/styles/About.module.css';




const About = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>About Us</h2>
      <p className={styles.paragraph}>
        Welcome to <span className={styles.highlight}>Digital Solutions Agency</span>, your trusted partner in navigating the digital landscape. We are a passionate team of marketing professionals dedicated to helping businesses thrive through innovative strategies and creative solutions.
      </p>
      <p className={styles.paragraph}>
        Our expertise spans a variety of services, including <span className={styles.highlight}>SEO</span>, where we optimize your online presence to rank higher in search results; <span className={styles.highlight}>Graphic Designing</span>, creating stunning visuals that resonate with your audience; <span className={styles.highlight}>Social Media Marketing</span>, building your brand’s voice and engagement across platforms; and <span className={styles.highlight}>Video Editing</span>, producing captivating video content that tells your story.
      </p>
      <p className={styles.paragraph}>
        At Digital Solutions Agency, we believe in a collaborative approach. We work closely with our clients to understand their unique needs and craft tailored strategies that deliver measurable results. Our commitment to excellence and innovation drives us to stay ahead of industry trends, ensuring that your business not only meets but exceeds its goals.
      </p>
      <p className={styles.paragraph}>
        Join us on this journey to elevate your brand in the digital world. Together, we can create impactful campaigns that not only attract but also retain customers, turning your vision into reality.
      </p>
    </section>
  );
};

export default About