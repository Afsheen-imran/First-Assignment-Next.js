
import Image from 'next/image';
import styles from '@/app/styles/VideoEditing.module.css'; 

const VideoEditing = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Video Editing Services</h2>
     
      <p className={styles.description}>
        In a world where visual storytelling is crucial, our Video Editing Services at Digitech are designed to help you create compelling and engaging video content. Whether you're looking to produce promotional videos, tutorials, or social media clips, we’ve got you covered.
      </p>
      <p className={styles.paragraph}>
        Our team of skilled editors uses the latest technology and techniques to transform your raw footage into polished and professional videos. We focus on enhancing your content through effective editing, sound design, and visual effects that resonate with your audience.
      </p>
      <p className={styles.paragraph}>
        From concept to final cut, we collaborate closely with you to ensure your vision comes to life. We understand the importance of deadlines, so we work efficiently to deliver high-quality results in a timely manner.
      </p>
      <p className={styles.paragraph}>
        Partner with us to elevate your video content and make a lasting impact. Let our expertise in video editing help you communicate your message powerfully and effectively.
      </p>
    </section>
  );
};

export default VideoEditing;
