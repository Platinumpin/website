import styles from './SocialLinks.module.css';

export default function SocialLinks() {
  const socials = [
    { name: 'Twitter', url: 'https://twitter.com/platinumpinrecords', icon: '𝕏' },
    { name: 'YouTube', url: 'https://youtube.com/@platinumpinrecords', icon: '▶' },
    { name: 'SoundCloud', url: 'https://soundcloud.com/platinumpinrecords', icon: '☁' },
  ];

  return (
    <div className={styles.socials}>
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          title={social.name}
          className={styles.link}
        >
          <span>{social.icon}</span>
        </a>
      ))}
    </div>
  );
}