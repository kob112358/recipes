import './RecipeIngredients.css';

function RecipeIngredients(props) {

    return (
        <div>
            <h2>INGREDIENTS</h2>
            <ul>
                <li>{props.ingredients[0]}</li>
                <li>{props.ingredients[1]}</li>
                <li>{props.ingredients[2]}</li>
                <li>{props.ingredients[3]}</li>
                <li>{props.ingredients[4]}</li>
            </ul>
        </div>
    )
}

export default RecipeIngredients;