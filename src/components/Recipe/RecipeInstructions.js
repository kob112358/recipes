import './RecipeInstructions';

const RecipeInstructions = (props) => {


    return (
        <div className="instructions">
            <h2>INSTRUCTIONS</h2>
            <ol>
            {props.instructions.map(instruction => (
                <li>{instruction}</li>
            ))}
            </ol>
        </div>
    )
}

export default RecipeInstructions;