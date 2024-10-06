// /app/services/social-media/page.js
import React from 'react';
import styles from '@/app/styles/SocialMedia.module.css'; 

const SocialMedia = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Social Media Marketing Services</h2>
      <p className={styles.description}>
        In today's digital world, social media is a powerful tool for connecting with your audience and building brand awareness. At Digitech, we offer comprehensive social media marketing services designed to enhance your online presence and engage your target market effectively.
      </p>
      <p className={styles.paragraph}>
        Our experienced team develops tailored strategies that align with your business goals. We create engaging content, manage your social media profiles, and interact with your audience to foster a strong community around your brand. 
      </p>
      <p className={styles.paragraph}>
        We focus on analytics and insights to continually refine our strategies, ensuring that your social media campaigns yield measurable results. From paid advertising to organic growth tactics, we cover all aspects of social media marketing.
      </p>
      <p className={styles.paragraph}>
        Partner with us to elevate your social media presence. Let us help you connect with your audience, increase engagement, and drive traffic to your website.
      </p>
    </section>
  );
};

export default SocialMedia;
