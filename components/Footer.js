import styles from './Footer.module.css';
import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h3>PLATINUM PIN RECORDS</h3>
          <p>Artist-first record label dedicated to authentic creativity.</p>
          <SocialLinks />
        </div>
        <div className={styles.links}>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/artists">Artists</a></li>
            <li><a href="/releases">Releases</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>
        <div className={styles.contact}>
          <h4>Contact</h4>
          <p>Email: info@platinumpinrecords.com</p>
          <p>© 2026 Platinum Pin Records. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}