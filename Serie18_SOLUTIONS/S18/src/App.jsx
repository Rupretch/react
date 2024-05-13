import CountriesPage from "./CountriesPage/CountriesPage";
import HomePage from "./HomePage/HomePage";
import NavBarComponent from "./NavBarComponent/NavBarComponent";
import { Route, Routes} from "react-router-dom"
import RandomDogPage from "./RandomDogPage/RandomDogPage";

export default function App() {
  return (
    <>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Countries" element={<CountriesPage />} />
        <Route path="/RandomDog" element={<RandomDogPage />} />
      </Routes>
    </>
  );
}
