import { Link } from "react-router-dom";

export default function Accueil() {
    return(
        <>
            {/* <!-- Masthead--> */}
            <header className="masthead">
                <div className="container position-relative">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="text-center text-white">
                                {/* <!-- Page heading--> */}
                                <h1 className="mb-5">Bienvenue</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="features-icons bg-light text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div className="features-icons-icon d-flex"><i className="fa-solid fa-tablet-screen-button m-auto text-primary"></i></div>
                                <Link to="/archive2"><h3>API Magic the Gathering</h3></Link>
                                <p className="lead mb-0"></p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div className="features-icons-icon d-flex"></div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                                <div className="features-icons-icon d-flex"><i className="fa-solid fa-tablet m-auto text-primary"></i></div>
                                <Link to="/archive1"><h3>API Yu-gi-oh</h3></Link>
                                <p className="lead mb-0"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="showcase">
                <div className="container-fluid p-0">
                    <div className="row g-0">
                        <div className="col-lg-6 order-lg-2 text-white showcase-img1"></div>
                        <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                            <h2>Yu-Gi-Oh</h2>
                            <p className="lead mb-0">Yu-Gi-Oh! TCG est un jeu de cartes à collectionner créé en 1999 au Japon. Il est inspiré du manga Yu-Gi-Oh!. Une partie, pouvant être appelée duel, voit s'affronter plusieurs joueurs (souvent un nombre pair) répartis en deux camps, au cours de tours successifs.</p>
                        </div>
                    </div>
                    <div className="row g-0">
                        <div className="col-lg-6 text-white showcase-img2"></div>
                        <div className="col-lg-6 my-auto showcase-text">
                            <h2>Magic The Gathering</h2>
                            <p className="lead mb-0">Magic The Gathering est un jeu de cartes à jouer et à collectionner inventé par Richard Garfield en 1993. Il est souvent cité comme le jeu référence dans le monde des jeux de cartes à jouer.Ce jeu se distingue des jeux de cartes traditionnels par le fait qu'il existe plus de 25 000 cartes différentes avec lesquelles chaque joueur doit construire son propre deck.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}