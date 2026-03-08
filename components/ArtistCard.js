import Link from 'next/link';
import styles from './ArtistCard.module.css';

export default function ArtistCard({ name, slug, bio, image }) {
  return (
    <Link href={`/artists/${slug}`}> 
      <div className={styles.card}> 
        <div className={styles.image}> 
          {image ? (
            <img src={image} alt={name} /> 
          ) : (
            <div className={styles.placeholder}>🎤</div>
          )} 
        </div> 
        <div className={styles.info}> 
          <h3>{name}</h3> 
          <p>{bio}</p> 
          <span className={styles.link}>View Profile →</span> 
        </div> 
      </div> 
    </Link>
  );
}