import './RecipeHeader.css';

const RecipeHeader = (props) => {

    return (
        <div>
            <div>
                <h2>{props.recipes[0].name.toUpperCase()}</h2>
            </div>
            <div className="info">
                <div>Serves: {props.recipes[0].serves} |&nbsp;</div>
                <div>Prep Time: {props.recipes[0].prepTime} |&nbsp;</div>
                <div>Cook Time: {props.recipes[0].cookTime}</div>
            </div>
        </div>
    )
}

export default RecipeHeader;