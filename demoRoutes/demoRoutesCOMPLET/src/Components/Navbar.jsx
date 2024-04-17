import { Link } from "react-router-dom";

function Navbar() {
    return (
        <header className="w-100">
            <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
                <Link to="/" className="d-flex align-items-center text-dark text-decoration-none">
                    <span className="fs-4">Accueil</span>
                </Link>
                <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                    <Link className="me-3 py-2 text-dark text-decoration-none" to="/produits">Produits</Link>
                    <Link className="me-3 py-2 text-dark text-decoration-none" to="/equipe">Équipe</Link>
                    <Link className="py-2 text-dark text-decoration-none" to="/contact">Contact</Link>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;