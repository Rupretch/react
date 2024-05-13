



export default function Archive2() {

    let name;
    let color;
    let stype;
    let type;

    function onClick() {

        name = document.getElementById("filterName").value;
        color = document.getElementById("color").value;
        stype = document.getElementById("stype").value;
        type = document.getElementById("type").value;
      
        console.log(name,color,stype,type);
        


    }

    
    
    return(
    <>  
        <div className="container position-relative p-4">
            <div className="row justify-content-right">
                <div className="col-xl-4">
                    <input type="text" id="filterName" className="form-control form-control-lg" placeholder="Entre le nom d'un carte"/>
                    <select name="colors" id="color" className="form-select" >
                        <option value="">Choisi la couleur de la carte (mandatoire) </option>
                        <option value="White">White</option>
                        <option value="Blue">Blue</option>
                        <option value="Red">Red</option>
                        <option value="Black">Black</option>
                        <option value="Green">Green</option>
                    </select>
                    <select name="supertypes" id="stype" className="form-select">
                        <option value="">Choisi le superType de la carte (mandatoire) </option>
                        <option value="Basic">Basic</option>
                        <option value="Legendary">Lengendary</option>
                        <option value="Snow">Snow</option>
                        <option value="World">World</option>
                        <option value="Ongoing">Ongoing</option>
                    </select>
                    <select name="types" id="type" className="form-select">
                        <option value="">Choisi le type de la carte (mandatoire) </option>
                        <option value="Sorceries">Sorceries</option>
                        <option value="Instants">Instants</option>
                        <option value="Lands">Lands</option>
                        <option value="Creatures">Creatures</option>
                        <option value="Artifacts">Artifacts</option>
                        <option value="Enchantments">Enchantments</option>
                        <option value="Planeswalkers">Planeswalkers</option>
                    </select>
                </div>
                <div className="col">
                    <button className="btn btn-primary submit" onClick={onClick}>Submit</button>
                </div>
            </div>
            <div className="justify-content-center" id="carteIci">

            </div>
        </div>
        </>
    )
}