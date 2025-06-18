"use client"
import { useState } from 'react';
import styles from './styles/Home.module.css';
import MovieCard from './components/MovieCard';

const movies = [
  {
    title: 'O Senhor dos Anéis',
    description: 'Uma jornada épica pela Terra Média.',
    image: 'https://br.web.img3.acsta.net/medias/nmedia/18/92/91/32/20224832.jpg',
  },
  {
    title: 'Matrix',
    description: 'A realidade nem sempre é o que parece.',
    image: '/placeholder.jpg',
  },
  {
    title: 'Interestelar',
    description: 'Explorando os limites do espaço e do tempo.',
    image: '/placeholder.jpg',
  },
];

export default function Home() {
  const [search, setSearch] = useState('');

  const filtered = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>🎬 Catálogo de Filmes</h1>
        <input
          type="text"
          placeholder="Buscar filmes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </header>

      <main className={styles.grid}>
        {filtered.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </main>
    </div>
  );
}
