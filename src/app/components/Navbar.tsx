import React from 'react';
import Link from 'next/link';
import styles from '@/app/styles/Navbar.module.css'; 
import { FiAlignJustify } from "react-icons/fi";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>Digitech</div>

        {/* Desktop Navigation Links */}
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

        {/* Mobile Hamburger Menu on the right */}
        <Sheet>
          <SheetTrigger className={styles.toggleButton}>
            <FiAlignJustify />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <SheetDescription>
              <ul className={styles.mobileNavLinks}>
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
            </SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Navbar;
