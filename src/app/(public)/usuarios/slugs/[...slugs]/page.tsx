"use client"

export default function Home({ params }) {

  
  return (
    <div>
      {params.slugs.map((slug) => {
        return <p>{slug}</p>
      })}
    </div>
  );
}
