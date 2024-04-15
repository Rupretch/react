import animals from "../Animals";

export default function ImageAnimal(props) {
    return <img
    key={props.animal}
    src={animals[props.animal].image}
    alt={props.animal}
    onClick={props.onClick}
    className='animal'
    role="button"
/>
}