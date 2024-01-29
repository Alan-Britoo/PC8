import { useEffect, useState } from "react";
import "./App.css";

const Cat_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';
const CAT_PREFIX_IMAGE_URL = `https://cataas.com/cat/`;

export function App() {
  const [fact, setFact] = useState();
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    fetch(Cat_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data;
        setFact(fact);
      });
  }, []);

  useEffect(() => {
    if(!fact) return

    const threeFirstWords = fact.split(' ', 3).join(' ');
    console.log(threeFirstWords);

    fetch(`https://cataas.com/cat/says/${threeFirstWords}?json=true`)
      .then(res => res.json())
      .then(data => {
        const { _id } = data;
        setImageUrl(`${_id}/says/${threeFirstWords}?fontSize=50&fontColor=white`);
      })

  }, [fact]);  

  return (
    <main style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', maxWidth: '800px', margin: '0 auto', maxHeight: '500px'}}>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} 
          alt={`Imagen extraída usando las primeras tres palabras para ${fact}`}
        />
      )}
    </main>
  );
}

export default App;
