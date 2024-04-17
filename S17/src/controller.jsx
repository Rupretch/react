import ModelePays from "./ModelePays.jsx/ModelePays";
import Signals from "./Signals";

document.addEventListener('DOMContentLoaded', () => {
    ModelePays.getCountries().then(countriesData => {
        Signals.countries.value = countriesData;
    });
});