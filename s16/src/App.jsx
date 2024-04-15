import Entete from "./Composants/Entente";
import animals from "./Animals";
import "./App.css";
import Background from "./Composants/Background";
import ImageAnimal from "./Composants/ImageAnimal";
import Fait from "./Composants/Fait";
import { useState  } from "react"; // pour le contenu de fait

export default function App() {

  const [fact, setFact] = useState('');
  
  function handleClickToUpdateFact(e) {
    const facts = animals[e.target.alt].facts;
    const randomIndex = Math.floor(Math.random() * facts.length);
    const newFact = facts[randomIndex];
    setFact(newFact);
  }

  return (
    <>
      <Entete/>
      <Background/>
      <div className="animals">
      {Object.keys(animals).map((animal) => (
        <ImageAnimal key={animal} animal={animal} onClick={handleClickToUpdateFact}/>  
      ))}
      </div>
      <Fait fait={fact}/>
    </>
  )
}

