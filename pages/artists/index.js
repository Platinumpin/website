import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ArtistCard from '../../components/ArtistCard';
import styles from '../../styles/Artists.module.css';

export default function Artists() {
  const artists = [
    {
      name: 'B3LAC',
      slug: 'b3lac',
      bio: 'Lo-fi indie artist creating introspective soundscapes inspired by Mac DeMarco. Music where listeners see themselves.',
      image: '/b3lac.jpg',
    },
  ];

  return (
    <>
      <Header />
      <main>
        <section className={styles.page}>
          <div className={styles.container}>
            <h1>Our Artists</h1>
            <p className={styles.intro}>
              Platinum Pin Records supports authentic artists creating music with depth and meaning.
            </p>
            <div className={styles.grid}>
              {artists.map((artist) => (
                <ArtistCard key={artist.slug} {...artist} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}