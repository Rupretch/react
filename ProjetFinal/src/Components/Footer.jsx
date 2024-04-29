export default function Footer(){
    return(
    <footer className="footer bg-light">
      <div className="container position-relative">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <h2 className="mb-4">Inscrivez-vous!</h2>
            <form className="form-subscribe" id="contactFormFooter">
              <div className="row">
                <div className="col">
                  <input className="form-control form-control-lg" id="nomBelow" type="Nom" placeholder="Nom" data-sb-validations="required,Nom" />
                  <div className="invalid-feedback text-white" data-sb-feedback="nomBelow:required">Address Email est oubligatoire.</div>
                  <div className="invalid-feedback text-white" data-sb-feedback="nomBelow:nom">address email invalide.</div>
                </div>
              </div>
              <br/>
              <div className="row">
                <div className="col">
                  <input className="form-control form-control-lg" id="prenomBelow" type="Prenom" placeholder="Prenom" data-sb-validations="required,Prenom" />
                  <div className="invalid-feedback text-white" data-sb-feedback="prenom:required">le prénom est oubligatoire.</div>
                  <div className="invalid-feedback text-white" data-sb-feedback="prenom:email">prénom invalide.</div>
                </div>
              </div>
              <br/>
              <div className="row">
                <div className="col">
                  <input className="form-control form-control-lg" id="emailAddressBelow" type="Email" placeholder="Address Email" data-sb-validations="required,email" />
                  <div className="invalid-feedback text-white" data-sb-feedback="emailAddressBelow:required">Address Email est oubligatoire.</div>
                  <div className="invalid-feedback text-white" data-sb-feedback="emailAddressBelow:email">Address Email invalide.</div>
                </div>
                <div className="col-auto"><button className="btn btn-primary btn-lg disabled" id="submitButton" type="submit">Submit</button></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
    )
}