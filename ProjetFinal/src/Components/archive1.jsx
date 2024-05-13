import Signals from "../Signals";
import { Link } from "react-router-dom";

export default function Archive1() {

    const carteRandom1 = Signals.card1.value;
    const carteRandom2 = Signals.card2.value;
    const carteRandom3 = Signals.card3.value;
    const carteRandom4 = Signals.card4.value;
    const carteRandom5 = Signals.card5.value;
    const carteRandom6 = Signals.card6.value;
    const carteRandom7 = Signals.card7.value;
    const carteRandom8 = Signals.card8.value;
    const carteRandom9 = Signals.card9.value;
    const carteRandom10 = Signals.card10.value;
    const carteRandom11 = Signals.card11.value;
    const carteRandom12 = Signals.card12.value;
    const carteRandom13 = Signals.card13.value;
    const carteRandom14 = Signals.card14.value;
    const carteRandom15 = Signals.card15.value;
    const carteRandom16 = Signals.card16.value;
    const carteRandom17 = Signals.card17.value;
    const carteRandom18 = Signals.card18.value;
    const carteRandom19 = Signals.card19.value;
    const carteRandom20 = Signals.card20.value;


    return (
        <>  
        <div className="container position-relative p-4">
            <div className="row justify-content-right">
                <div className="col-xl-4">
                    <input type="text" id="filterName" className="form-control form-control-lg" placeholder="Entre le nom d'un carte"/>
                    
                </div>
                <div className="col">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </div>
            <div className="justify-content-center">
                <h3 className="h3 text-center">Voici des cartes aléatoires</h3>
                <div id="images">
                    <Link to={`/zoom1/${carteRandom1.id}`}><img src={carteRandom1.card_images[0].image_url_small}   id={carteRandom1.name} className="evenCard"/></Link> 
                    <Link to={`/zoom1/${carteRandom2.id}`}><img src={carteRandom2.card_images[0].image_url_small}   id={carteRandom2.name} className="evenCard"/></Link>
                    <Link to={`/zoom1/${carteRandom3.id}`}><img src={carteRandom3.card_images[0].image_url_small}   id={carteRandom3.name} className="evenCard"/></Link>
                    <Link to={`/zoom1/${carteRandom4.id}`}><img src={carteRandom4.card_images[0].image_url_small}   id={carteRandom4.name} className="evenCard"/></Link>
                    <Link to={`/zoom1/${carteRandom5.id}`}><img src={carteRandom5.card_images[0].image_url_small}   id={carteRandom5.name} className="evenCard"/></Link>
                    <Link to={`/zoom1/${carteRandom6.id}`}><img src={carteRandom6.card_images[0].image_url_small}   id={carteRandom6.name} className="evenCard"/></Link>
                    <Link to={`/zoom1/${carteRandom7.id}`}><img src={carteRandom7.card_images[0].image_url_small}   id={carteRandom7.name} className="evenCard"/></Link>
                    <Link to={`/zoom1/${carteRandom8.id}`}><img src={carteRandom8.card_images[0].image_url_small}   id={carteRandom8.name} className="evenCard"/></Link>
                    <Link to={`/zoom1/${carteRandom9.id}`}><img src={carteRandom9.card_images[0].image_url_small}   id={carteRandom9.name} className="evenCard"/></Link>
                    <Link to={`/zoom1/${carteRandom10.id}`}><img src={carteRandom10.card_images[0].image_url_small} id={carteRandom10.name} className="evenCard"/></Link>
                    <Link to={`/zoom1/${carteRandom11.id}`}><img src={carteRandom11.card_images[0].image_url_small} id={carteRandom11.name} className="evenCard"/></Link>
                    <Link to={`/zoom1/${carteRandom12.id}`}><img src={carteRandom12.card_images[0].image_url_small} id={carteRandom12.name} className="evenCard"/></Link>
                    <Link to={`/zoom1/${carteRandom13.id}`}><img src={carteRandom13.card_images[0].image_url_small} id={carteRandom13.name} className="evenCard"/></Link>
                    <Link to={`/zoom1/${carteRandom14.id}`}><img src={carteRandom14.card_images[0].image_url_small} id={carteRandom14.name} className="evenCard"/></Link>
                    <Link to={`/zoom1/${carteRandom15.id}`}><img src={carteRandom15.card_images[0].image_url_small} id={carteRandom15.name} className="evenCard"/></Link>
                    <Link to={`/zoom1/${carteRandom16.id}`}><img src={carteRandom16.card_images[0].image_url_small} id={carteRandom16.name} className="evenCard"/></Link>
                    <Link to={`/zoom1/${carteRandom17.id}`}><img src={carteRandom17.card_images[0].image_url_small} id={carteRandom17.name} className="evenCard"/></Link>
                    <Link to={`/zoom1/${carteRandom18.id}`}><img src={carteRandom18.card_images[0].image_url_small} id={carteRandom18.name} className="evenCard"/></Link>
                    <Link to={`/zoom1/${carteRandom19.id}`}><img src={carteRandom19.card_images[0].image_url_small} id={carteRandom19.name} className="evenCard"/></Link>
                    <Link to={`/zoom1/${carteRandom20.id}`}><img src={carteRandom20.card_images[0].image_url_small} id={carteRandom20.name} className="evenCard"/></Link>
                </div>
            </div>
        </div>      
    </>
    )
    
}