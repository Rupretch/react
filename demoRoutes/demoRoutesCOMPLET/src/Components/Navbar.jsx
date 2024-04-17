function Navbar() {
    return (
        <header className="w-100">
            <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
                <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
                    <span className="fs-4">Accueil</span>
                </a>
                <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                    <a className="me-3 py-2 text-dark text-decoration-none" href="#">Produits</a>
                    <a className="me-3 py-2 text-dark text-decoration-none" href="#">Équipe</a>
                    <a className="py-2 text-dark text-decoration-none" href="#">Contact</a>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;