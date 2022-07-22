import './RecipeIngredients.css';

function RecipeIngredients(props) {

    return (
        <div className="ingredientList">
            <h2>INGREDIENTS</h2>
            <div>
            <ul>
                {props.ingredients.map(ingredient => (
                    <li>{ingredient}</li>
                ))}
            </ul>
            </div>
        </div>
    )
}

export default RecipeIngredients;