import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById('root'));

function App() {

  const nom = "David";
  const liste = (
    <ul>
      <li>Élément 1</li>
      <li>Élément 2</li>
      <li>Élément 3</li>
      <li>Élément 4</li>
    </ul>
  );

  const elms = [
    <a
      href="#"
      className="lien"
      title="Ceci est un lien">
      Texte du lien
    </a>,
    <p>Ceci est un p</p>,
    liste 
  ];

  const element = (
    <>
      <h1>Hello React</h1>
      <p>Salut {nom}</p>
      {elms}
    </>
  );

  root.render(element);
}

export default App
