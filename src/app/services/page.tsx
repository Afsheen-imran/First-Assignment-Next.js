// /app/services/page.js
import Link from 'next/link';
import styles from '@/app/styles/Services.module.css'; 

const Services = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Our Services</h2>
      <p className={styles.description}>
        At Digitech, we specialize in providing a range of digital marketing services designed to elevate your brand and maximize your online presence. Our team of experts is committed to delivering tailored solutions that meet your unique business needs.
      </p>
      <div className={styles.serviceList}>
        <Link href="/services/seo" className={styles.serviceCard}>
          <h3 className={styles.serviceTitle}>SEO Optimization</h3>
          <p className={styles.serviceDescription}>
            Enhance your visibility on search engines and attract organic traffic to your website.
          </p>
        </Link>
        <Link href="/services/graphic-design" className={styles.serviceCard}>
          <h3 className={styles.serviceTitle}>Graphic Designing</h3>
          <p className={styles.serviceDescription}>
            Create stunning visuals that communicate your brands message effectively.
          </p>
        </Link>
        <Link href="/services/social-media" className={styles.serviceCard}>
          <h3 className={styles.serviceTitle}>Social Media Marketing</h3>
          <p className={styles.serviceDescription}>
            Build your brands online presence and engage your audience through strategic campaigns.
          </p>
        </Link>
        <Link href="/services/video-editing" className={styles.serviceCard}>
          <h3 className={styles.serviceTitle}>Video Editing</h3>
          <p className={styles.serviceDescription}>
            Produce high-quality video content that captivates your audience and tells your story.
          </p>
        </Link>
      </div>
    </section>
  );
};

export default Services;
