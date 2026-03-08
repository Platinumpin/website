import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SocialLinks from '../../components/SocialLinks';
import styles from '../../styles/ArtistProfile.module.css';

export default function B3lac() {
  return (
    <> 
      <Header />
      <main>
        <section className={styles.profile}>
          <div className={styles.container}>
            <div className={styles.header}>
              <div className={styles.image}>
                <div className={styles.placeholder}>🎤</div>
              </div>
              <div className={styles.info}>
                <h1>B3LAC</h1>
                <p className={styles.role}>Lo-Fi Indie Artist</p>
                <p className={styles.bio}>
                  B3LAC creates introspective lo-fi soundscapes where listeners discover themselves in the music. 
                  Inspired by the dreamy, authentic aesthetic of Mac DeMarco, B3LAC's work blends minimalist production 
                  with deeply personal songwriting.
                </p>
                <div className={styles.socials}>
                  <SocialLinks />
                </div>
              </div>
            </div>

            <div className={styles.content}>
              <h2>About B3LAC</h2>
              <p>
                With a focus on authenticity and emotional honesty, B3LAC's music invites listeners into intimate 
                spaces of reflection. The lo-fi production aesthetic becomes a canvas for raw vulnerability, 
                creating tracks that resonate with those seeking genuine connection in music.
              </p>

              <h2>Musical Style</h2>
              <ul className={styles.features}>
                <li>Lo-fi hip-hop influenced production</li>
                <li>Introspective, personal lyricism</li>
                <li>Dreamy, atmospheric soundscapes</li>
                <li>Mac DeMarco-inspired bedroom pop elements</li>
              </ul>

              <h2>Recent Releases</h2>
              <div className={styles.releases}>
                <div className={styles.release}>
                  <h3>Coming Soon</h3>
                  <p>First release on Platinum Pin Records</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}