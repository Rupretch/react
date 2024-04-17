import Navbar from './Components/Navbar';
import Contenu from './Components/Contenu';
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <div className="container container-fluid py-3">
        <Navbar />
        <Routes>
          <Route path='/' element={<Contenu />}/>
          <Route path='/produits' element={<Contenu titre="Nos produits" contenu="Texte des produits"/>}/>
          <Route path='/equipe' element={<Contenu titre="Équipe de feu" contenu="NOtre equipe"/>}/>
          <Route path='/contact' element={<Contenu titre="Nous joindre" contenu="a nous joindre"/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
