import './RecipeHeader.css';

const RecipeHeader = (props) => {

    return (
        <div className="recipeHeader">
            <div className="recipeName">
                {props.recipes.name.toUpperCase()}
            </div>
            <div className="info">
                <div>Serves: {props.recipes.serves} &nbsp;</div>
                <div>Prep Time: {props.recipes.prepTime}min&nbsp;</div>
                <div>Cook Time: {props.recipes.cookTime}min</div>
            </div>
        </div>
    )
}

export default RecipeHeader;