import React from "react";
import Link from "next/link";
import styles from "../styles/Footer.module.css"

const Footer = () => {
  return (
    <div className="row"> 
    <div className="col-md-4">   
      <ul  className={styles.footerli}>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about">
            About
          </Link>
        </li>
        <li>
          <Link href="/courses">
            Courses
          </Link>
        </li>
        <li>
          <Link href="/facilities">
            Facilities
          </Link>
        </li>
        <li>
          <Link href="/contact">
            Contact
          </Link>
        </li>
      </ul>
      </div>  
      <div className="col-md-4">   
      <ul  className={styles.footerli}>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about">
            About
          </Link>
        </li>
        <li>
          <Link href="/courses">
            Courses
          </Link>
        </li>
        <li>
          <Link href="/facilities">
            Facilities
          </Link>
        </li>
        <li>
          <Link href="/contact">
            Contact
          </Link>
        </li>
      </ul>
      </div>
      <div className="col-md-4">   
      <ul  className={styles.footerli}>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about">
            About
          </Link>
        </li>
        <li>
          <Link href="/courses">
            Courses
          </Link>
        </li>
        <li>
          <Link href="/facilities">
            Facilities
          </Link>
        </li>
        <li>
          <Link href="/contact">
            Contact
          </Link>
        </li>
      </ul>
      </div>
    </div>
  );
};

export default Footer;
