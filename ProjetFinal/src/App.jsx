import Accueil from './Components/Accueil'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Archive1 from './Components/archive1';
import {Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Accueil/>}/>
        <Route path="/archive1" element={<Archive1/>}/>
        <Route path="/archive2" element={<></>}/>
        <Route path="/zoom1" element={<></>}/>
        <Route path="/zoom2" element={<></>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
