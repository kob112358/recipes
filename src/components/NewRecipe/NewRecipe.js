import React from "react";
import "./NewRecipe.css";
import { useState } from "react";

const NewRecipe = (props) => {
  const [name, setName] = useState("");
  const [serves, setServes] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const newRecipe = {
        key: name,
        name: name,
        serves: serves,
        prepTime: +prepTime,
        cookTime: +cookTime,
        ingredients: ingredients.split(),
        instructions: instructions.split()
    };
    props.addRecipe(newRecipe);
    setName("");
    setServes("");
    setPrepTime("");
    setCookTime("");
    console.log(typeof ingredients.slice(2,1));
    setIngredients("");
    setInstructions("");
  };

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const servesChangeHandler = (event) => {
    setServes(event.target.value);
  };
  const prepTimeChangeHandler = (event) => {
    setPrepTime(event.target.value);
  };
  const cookTimeChangeHandler = (event) => {
    setCookTime(event.target.value);
  };
  const ingredientsChangeHandler = (event) => {
    setIngredients(event.target.value);
  };
  const instructionsChangeHandler = (event) => {
    setInstructions(event.target.value);
  };

  return (
    <>
    <div className="new-recipe-background" onClick={props.hideRecipe}></div>
    <div className="new-recipe">
      <form onSubmit={onSubmitHandler}>
        <div>
          <label for="name">Name:</label>
          <input id="name" type="text" value={name} onChange={nameChangeHandler}></input>
        </div>
        <div>
          <label for="serves">Serves:</label>
          <input id="serves" type="text" value={serves} onChange={servesChangeHandler}></input>
        </div>
        <div>
          <label for="prepTime">Prep Time:</label>
          <input id="prepTime" type="number" value={prepTime} onChange={prepTimeChangeHandler}></input>
        </div>
        <div>
          <label for="cookTime">Cook Time:</label>
          <input id="cookTime" type="number" value={cookTime} onChange={cookTimeChangeHandler}></input>
        </div>
        <div>
          <label for="ingredients">Ingredients:</label>
          <textarea
            id="ingredients"
            placeholder="Please enter one ingredient per line" value={ingredients} onChange={ingredientsChangeHandler}
          ></textarea>
        </div>
        <div>
          <label for="instructions">Instructions:</label>
          <textarea
            id="instructions"
            placeholder="Please enter one instruction per line" value={instructions} onChange={instructionsChangeHandler}
          ></textarea>
        </div>
        <button type="submit">Add new recipe</button>
      </form>
    </div>
    </>
  );
};

export default NewRecipe;
