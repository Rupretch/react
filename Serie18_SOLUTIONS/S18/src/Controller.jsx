import CountriesService from "./Models/CountriesService"
import RandomDogService from "./Models/RandomDogService";
import Signals from "./Signals";

//Les appels API qui peuvent être exécutés qu'une seule fois ou qui doivent être exécutés une première fois sont codés dans le window.onload (et seront exécutés seulement au chargement initial du site web)
window.onload = () => {
    CountriesService.getCountries().then(countriesData => {
        Signals.countries.value = countriesData;
    });

    Controller.ControlGenerateRandomDogOnClickEvent();
}


//Les events listeners en React ne sont pas 'user-friendly' pour le MVC étant donné que la méthode de fonctionner avec React est de coder les events listeners directement dans la view ; ainsi, on doit exporter certaines méthodes du controller.
export default class Controller{
    static ControlGenerateRandomDogOnClickEvent(){
        RandomDogService.getRandomDog().then(randomDogData => {
            Signals.randomDog.value = randomDogData;
        });
    }
}