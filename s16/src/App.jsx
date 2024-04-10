import Entete from "./Composants/Entente";
import animals from "./Animals";
import "./App.css";
import Background from "./Composants/Background";

export default function App() {

  
  const images = [];

  for (let animal in animals) {
    let img = (
      <img
      key={animal}
      className="animal" 
      src={animals[animal].image} 
      alt={animal} 
      aria-label={animal}
      role="button"
      onClick={displayFact}
      />
    );
    images.push(img);
  }

  // console.log(images);

  const animalFacts = (
    <div>
      <Entete/>
      <Background/>
      <div className="animals">
        {images}
      </div>
      <p id="fact"></p>
    </div>
  );

  return (
    <>
      {animalFacts}
    </>
  )
}

function displayFact(e) {
  const facts = animals[e.target.alt].facts;
  const randomIndex = Math.floor(Math.random() * facts.length);
  const fact = facts[randomIndex];
  document.getElementById('fact').innerText = fact;
}