import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Releases.module.css';

export default function Releases() {
  const releases = [
    {
      id: 1,
      title: 'Coming Soon',
      artist: 'B3LAC',
      date: '2026',
      description: 'First release on Platinum Pin Records',
    },
  ];

  return (
    <>
      <Header />
      <main>
        <section className={styles.releases}>
          <div className={styles.container}>
            <h1>Releases</h1>
            <p className={styles.intro}>
              Discover authentic music from Platinum Pin Records artists.
            </p>
            <div className={styles.list}>
              {releases.map((release) => (
                <div key={release.id} className={styles.release}>
                  <div className={styles.cover}>
                    <div className={styles.placeholder}>💿</div>
                  </div>
                  <div className={styles.details}>
                    <h3>{release.title}</h3>
                    <p className={styles.artist}>{release.artist}</p>
                    <p className={styles.date}>{release.date}</p>
                    <p className={styles.description}>{release.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}