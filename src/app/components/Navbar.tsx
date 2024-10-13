
import React from 'react';
import Link from 'next/link';
import styles from '@/app/styles/Navbar.module.css'; 

const Navbar = () => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <div className={styles.logo}>Digitech</div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/" className={styles.link}>Home</Link>
        </li>
        <li>
          <Link href="/about" className={styles.link}>About</Link>
        </li>
        <li>
          <Link href="/contact" className={styles.link}>Contact</Link>
        </li>
        <li>
          <Link href="/services" className={styles.link}>Services</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
