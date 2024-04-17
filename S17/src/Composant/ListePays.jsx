import Signals from "../Signals";

function ListePays() {

    const pays = Signals.countries.value;

    return (
        <>
            <h1 className="h1 p-5"> 
            Liste des capitales avec le drapeau de leur pays 
            </h1> 
            <div className="container d-flex flex-wrap justify-content-evenly gap-3"> 
                {pays.map((country) => {   
                    return (
                        <div 
                            key={country.ccn3} 
                            className="card" 
                            style={{ width: "18rem", height: "18rem" }} 
                        > 
                            <img src={country.flags.png} 
                            className="card-img-top" 
                            style={{ height: "13rem" }} 
                            /> 
                            <div className="card-body"> 
                                <p className="card-text">
                                    Voici le drapeau du pays ayant comme capitale : {country.capital} 
                                </p> 
                            </div> 
                        </div>
                    ); 
                })} 
            </div>
        </>
    );
}

export default ListePays;