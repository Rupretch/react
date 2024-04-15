import animals from '../Animals';

function ImageAnimal(props) {
    // Renvoie un élément <img> avec les infos de l'animal
    // et une fonction pour gérer le clic (onClick)
    return (
        <img
            key={props.animal}
            src={animals[props.animal].image}
            alt={props.animal}
            onClick={props.onClick}
            className='animal'
            role="button"
        />
    );
}

export default ImageAnimal;