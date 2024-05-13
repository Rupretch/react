export default class Modeleyugi{
    
    static getRandomCard(){
        return fetch('https://api.magicthegathering.io/v1/cards?name=${name}&color=${color}&supertypes=${stype}&types=${type}')
        .then(response => response.json())
        .then(data => data);
    }



}