export default class RandomDogService{
    static async getRandomDog(){
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        return data;
    }
}