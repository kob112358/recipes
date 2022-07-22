import './RecipeCard.css';
import RecipeIngredients from './RecipeIngredients';
import Card from '../UI/Card';
import RecipeHeader from './RecipeHeader';
import RecipeInstructions from './RecipeInstructions';

function RecipeCard(props) {

    return(
        <Card>
            <RecipeHeader recipes={props.recipes} />
            <RecipeIngredients ingredients={props.recipes.ingredients} />
            <RecipeInstructions instructions={props.recipes.instructions} />
        </Card>
    )
}

export default RecipeCard;