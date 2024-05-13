import { handleSubmit } from "../Controlleur"


export default function Footer(){
    return(
    <footer className="footer bg-light">
      <div className="container position-relative">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <h2 className="mb-4">Inscrivez-vous!</h2>
            <form className="form-subscribe" id="contactFormFooter" onSubmit={handleSubmit}>
              <fieldset>
              <div className="row">
                <div className="col">
                  <input className="form-control form-control-lg" id="nomBelow" type="Nom" placeholder="Nom" required/>
                  <div className="invalid-feedback text-white" data-sb-feedback="nomBelow:nom">nom est invalide.</div>
                </div>
              </div>
              <br/>
              <div className="row">
                <div className="col">
                  <input className="form-control form-control-lg" id="prenomBelow" type="Prenom" placeholder="Prenom" required/>
                  <div className="invalid-feedback text-white" data-sb-feedback="prenom:email">prénom est invalide.</div>
                </div>
              </div>
              <br/>
              <div className="row">
                <div className="col">
                  <input className="form-control form-control-lg" id="emailAddressBelow" type="Email" placeholder="Address Email" required />
                  <div className="invalid-feedback text-white" data-sb-feedback="emailAddressBelow:email">Address Email est invalide.</div>
                </div>  
              </div>
              </fieldset>
              <br/>
              <div className="col-auto"><button className="btn btn-primary btn-lg" id="submitButton" type="submit">Submit</button></div>
            </form>
          </div>
        </div>
      </div>
    </footer>
    )
}