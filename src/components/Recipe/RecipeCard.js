import './RecipeCard.css';
import RecipeIngredients from './RecipeIngredients';
import Card from '../UI/Card';
import RecipeHeader from './RecipeHeader';
import RecipeInstructions from './RecipeInstructions';
import squash from '../../assets/squash.jpg';

function RecipeCard(props) {

    return(
        <Card>
            <div>
                <RecipeHeader recipes={props.recipes} />
                <hr></hr>
                <RecipeIngredients ingredients={props.recipes[0].ingredients} />
                <hr></hr>
                <RecipeInstructions instructions={props.recipes[0].instructions} />
            </div>
            <div>
                <img alt="butternut squash" src={squash}></img>
            </div>
        </Card>
    )
}

export default RecipeCard;