import styles from '../styles/Home.module.css';

export default function MovieCard({ movie }) {
  return (
    <div className={styles.card}>
      <img src={movie.image} alt={movie.title} />
      <div className={styles.info}>
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
      </div>
    </div>
  );
}
