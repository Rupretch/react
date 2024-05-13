import Accueil from './Components/Accueil'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Archive1 from './Components/archive1';
import Archive2 from './Components/archive2';
import Zoom1 from './Components/zoom1';
import {Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Accueil/>}/>
        <Route path="/archive1" element={<Archive1/>}/>
        <Route path="/archive2" element={<Archive2/>}/>
        <Route path="/zoom1/:idCard" element={<Zoom1/>}/>
        <Route path="/zoom2" element={<></>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
