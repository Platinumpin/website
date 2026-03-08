import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.about}>
          <div className={styles.container}>
            <h1>About Platinum Pin Records</h1>

            <div className={styles.content}>
              <h2>Our Mission</h2>
              <p>
                Platinum Pin Records is an artist-first record label dedicated to supporting authentic creators 
                who make music with depth, meaning, and emotional honesty. We believe in putting artists first, 
                providing creative freedom, and building a community where listeners connect with music that 
                reflects their own experiences.
              </p>

              <h2>What We Do</h2>
              <ul className={styles.list}>
                <li><strong>Artist Support:</strong> We provide resources, guidance, and platforms for our artists to grow.</li>
                <li><strong>Creative Freedom:</strong> We believe artists should have full creative control over their work.</li>
                <li><strong>Community Building:</strong> We foster connections between artists and listeners who find meaning in the music.</li>
                <li><strong>Quality Over Quantity:</strong> We focus on releasing meaningful music rather than chasing trends.</li>
              </ul>

              <h2>Our Philosophy</h2>
              <p>
                In a world of algorithmic recommendations and trend-chasing, Platinum Pin Records stands for 
                authenticity. We curate artists who create music where listeners see themselves—music that resonates 
                on a personal level, that speaks to real experiences and genuine emotions.
              </p>
              <p>
                Whether it's lo-fi bedroom pop, introspective indie rock, or experimental soundscapes, we celebrate 
                artists who prioritize substance over style and meaning over streams.
              </p>

              <h2>Contact</h2>
              <p>
                Interested in collaboration, submission, or inquiry? Reach out at:
              </p>
              <p className={styles.contact}>
                <strong>Email:</strong> info@platinumpinrecords.com
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}