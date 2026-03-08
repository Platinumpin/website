import Header from '../components/Header';
import Footer from '../components/Footer';
import ArtistCard from '../components/ArtistCard';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.hero}>
          <div className={styles.container}>
            <h1>PLATINUM PIN RECORDS</h1>
            <p>Artist-First Record Label</p>
            <p className={styles.subtitle}>
              Curating authentic voices where listeners see themselves in the music.
            </p>
            <div className={styles.buttons}>
              <a href="/artists" className={styles.primary}>Explore Artists</a>
              <a href="/releases" className={styles.secondary}>Latest Releases</a>
            </div>
          </div>
        </section>

        <section className={styles.featured}>
          <div className={styles.container}>
            <h2>Featured Artists</h2>
            <div className={styles.grid}>
              <ArtistCard
                name="B3LAC"
                slug="b3lac"
                bio="Lo-fi indie artist inspired by Mac DeMarco. Creating introspective soundscapes where listeners discover themselves."
                image="/b3lac.jpg"
              />
            </div>
          </div>
        </section>

        <section className={styles.about}>
          <div className={styles.container}>
            <h2>Our Mission</h2>
            <p>
              Platinum Pin Records is dedicated to supporting artists who create music with depth and authenticity. 
              We believe in putting artists first, providing creative freedom, and building a community where 
              listeners connect with music that reflects their own experiences.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}