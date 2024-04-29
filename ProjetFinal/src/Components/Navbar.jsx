import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <nav className="navbar navbar-light bg-light static-top">
            <div className="container">
                <Link className="navbar-brand" to="/">Projet API</Link>
                <div className="nav-item dropdown dropstart btn-group">
                    <button className="dropdown-toggle btn btn-secondary" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Pages
                    </button>
                    <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="/">Acceuil</Link></li>
                        <li><Link className="dropdown-item" to="/archive1">Yu-Gi-Oh</Link></li>
                        <li><Link className="dropdown-item" to="/archive2">Magic</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
)
}