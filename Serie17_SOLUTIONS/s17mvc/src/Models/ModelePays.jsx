export default class ModelePays{
    static getCountries() {
        return fetch('https://restcountries.com/v3.1/all?fields=capital,flags,ccn3')
            .then(response => response.json())
            .then(data => data);
    }
}