export default class CountriesService{
    static async getCountries(){
        const response = await fetch('https://restcountries.com/v3.1/all?fields=capital,flags,ccn3');
        const data = await response.json();
        return data;
    }
}