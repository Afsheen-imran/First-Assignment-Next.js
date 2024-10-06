
import React from 'react';
import styles from '@/app/styles/Contact.module.css'; 

const Contact = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Contact Us</h2>
      <p className={styles.description}>
        We would love to hear from you! Whether you have questions, feedback, or want to discuss your project, our team is here to assist you.
      </p>
      <p className={styles.description}>
        Fill out the form below or reach out to us via email or phone. We aim to respond to all inquiries within 24 hours.
      </p>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>Name:</label>
          <input type="text" id="name" className={styles.input} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email:</label>
          <input type="email" id="email" className={styles.input} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>Message:</label>
          <textarea id="message" className={styles.textarea} required></textarea>
        </div>
        <button type="submit" className={styles.button}>Send Message</button>
      </form>
      <div className={styles.contactInfo}>
        <h3 className={styles.infoTitle}>Or Reach Us At:</h3>
        <p>Email: info@digitalsolutionsagency.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>
    </section>
  );
};

export default Contact;
