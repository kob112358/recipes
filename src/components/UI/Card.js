import './Card.css';

const Card = (props) => {
    const classesToAdd = 'card' + (props.className === 'undefined' ? ' ' + props.className : '');

    return (
        <div className={classesToAdd}>{props.children}</div>
    )
}

export default Card