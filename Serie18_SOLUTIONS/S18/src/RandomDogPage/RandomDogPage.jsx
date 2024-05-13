import Controller from "../Controller";
import Signals from "../Signals";

export default function RandomDogPage() {
  return (
    <>
      <div className="container d-flex vh-100 align-items-center justify-content-center">
        <div className="card" style={{ width: "18rem" }}>
          <img src={Signals.randomDog.value.message} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Image aléatoire de chien</h5>
            <p className="card-text">
              Cliquer sur le bouton ci-dessous pour générer une image de chien aléatoirement!
            </p>
            <button onClick={Controller.ControlGenerateRandomDogOnClickEvent} className="btn btn-primary">
              Générer
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
