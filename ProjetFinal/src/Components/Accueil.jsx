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
                                <h3>API Yu-gi-oh</h3>
                                <p className="lead mb-0">Click ici pour voir des cartes Yu-Gi-Oh</p>
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
                                <h3>API Magic The Gathering</h3>
                                <p className="lead mb-0">Click ici pour voir des cartes Magic!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="showcase">
                <div className="container-fluid p-0">
                    <div className="row g-0">
                        <div className="col-lg-6 order-lg-2 text-white showcase-img"></div>
                        <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                            <h2>Yu-Gi-Oh</h2>
                            <p className="lead mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore adipisci atque, distinctio omnis aliquid sapiente eius maiores repudiandae doloribus ex et minima numquam, nostrum explicabo vel quasi fuga iusto earum.</p>
                        </div>
                    </div>
                    <div className="row g-0">
                        <div className="col-lg-6 text-white showcase-img" ></div>
                        <div className="col-lg-6 my-auto showcase-text">
                            <h2>Magic The Gathering</h2>
                            <p className="lead mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, aspernatur. Iusto odio sunt et. Deleniti culpa omnis nostrum, perferendis cum officiis, atque, quisquam earum aut numquam fugit provident itaque ullam!</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}