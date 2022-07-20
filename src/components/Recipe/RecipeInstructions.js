import './RecipeInstructions';

const RecipeInstructions = (props) => {


    return (
        <div>
            <h2>INSTRUCTIONS</h2>
            <div>{props.instructions[0]}</div>
            <div>{props.instructions[1]}</div>
            <div>{props.instructions[2]}</div>
        </div>
    )
}

export default RecipeInstructions;