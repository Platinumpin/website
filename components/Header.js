import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <h1>🎵 PLATINUM PIN RECORDS</h1>
        </Link>
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/artists">Artists</Link>
          <Link href="/releases">Releases</Link>
          <Link href="/about">About</Link>
        </nav>
      </div>
    </header>
  );
}