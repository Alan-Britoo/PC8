import "./App.css";
import { useCatFact } from "./hooks/useCatFact.js";
import { useCatImage } from "./hooks/useCatImge.js";


export function App() {
  const { fact, refreshFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });
  
  const handleClick = async () => {
    refreshFact();
  };

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>App de gatitos</h1>

      <button onClick={handleClick}>Get new fact</button>

      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`Imagen extraída usando las primeras tres palabras para ${fact}`}
        />
      )}
    </main>
  );
}

export default App;
