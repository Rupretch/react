import ModelePays from "./Models/ModelePays" 
import Signals from "./Signals";

document.addEventListener('DOMContentLoaded', () => {
    ModelePays.getCountries().then(countriesData => {
        Signals.countries.value = countriesData;
    });
});