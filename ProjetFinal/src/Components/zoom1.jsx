import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Zoom1() {

    const params = useParams();

    const [cardDetails, setCardDetails] = useState([]);

    useEffect(() => {
        const url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?id='+params.idCard;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data.data[0]);
                setCardDetails(data.data[0])
            })
            .catch(error => {console.log(error)});
    }, []);

    function spellTrapMonstre(type){
        let carte = null;
        switch (type) {
            case "Spell Card":
                carte = 
                <>
                    <h1>{cardDetails.name}</h1>
                    <p>{cardDetails.type} {cardDetails.race}</p>
                    <p>{cardDetails.desc}</p>
                </>
            return carte;
            case "Trap Card":
                carte =
                <>
                    <h1>{cardDetails.name}</h1>
                    <p>{cardDetails.type} {cardDetails.race}</p>
                    <p>{cardDetails.desc}</p>
                </>
            return carte;            
            default:
                carte =
                <>
                    <h1>{cardDetails.name}</h1>
                    <p>{cardDetails.type} {cardDetails.race}</p> 
                    <p>level {cardDetails.level}</p>
                    <p>{cardDetails.attribute}</p>
                    <p>Attack/Defense</p>
                    <p>{cardDetails.atk}/{cardDetails.def}</p>
                    <p>{cardDetails.desc}</p>
                </>
            return carte;      
    }}

    return (
        <>
        <br /> 
            <div id="info" className="row justify-content-center">
                <div className="col-3">
                    <img src="\img\Gazelle.avif" alt="This is a placeholder image because of the limitation of my API" />
                    {/* img src=cardDetails.card_images[0].image_url_small*/}
                </div>
                <div className="col-xl-5 col-md-8 col-12">
                    {spellTrapMonstre(cardDetails.type)}
                    <Link to="/archive1"><button className="btn btn-primary">Retour</button></Link>
                </div>
            </div>
            <br/>
        </>
    )



}