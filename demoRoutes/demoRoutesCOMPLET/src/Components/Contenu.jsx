function Contenu(props) {
    return (
        <div className="text-center">
            <h1>{props.titre}</h1>
            <p>{props.contenu}</p>
        </div>
    );
}

Contenu.defaultProps = {
    titre: "Bienvenue!",
    contenu: "sur notre app React."
}

export default Contenu;