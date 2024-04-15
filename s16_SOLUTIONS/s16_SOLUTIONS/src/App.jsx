import animals from './Animals';
import Entete from './Composants/Entete';
import Background from './Composants/Background';
import ImageAnimal from './Composants/ImageAnimal';
import Fait from './Composants/Fait';
import './App.css';
import { useState } from 'react'; // Import de 'useState' pour gérer l'état du 'fun fact'

export function App() {

  // Crochet 'useState' pour le contenu du fait
  const [fact, setFact] = useState(''); // On initialise le fait à une chaîne vide
  
  // Fonction pour gérer le clic sur une image et mettre à jour le fait
  const handleClick = (e) => {
    const facts = animals[e.target.alt].facts;
    const randomIndex = Math.floor(Math.random() * facts.length);
    const newFact = facts[randomIndex];
    //console.log(newFact);
    setFact(newFact); // On met à jour le fait avec la fonction de rappel
  }

  // Composant App
  return (
    <>
      <Entete />
      <Background />
      <div className='animals'>
      { Object.keys(animals).map((animal) => (
        <ImageAnimal key={animal} animal={animal} onClick={handleClick /* on délègue aux composants ImageAnimal la fonction pour gérer leur clic */} />
      ))}
      </div>
      <Fait fait={fact /* on délègue au composant Fait  */} />
    </>
  );

}

export default App;