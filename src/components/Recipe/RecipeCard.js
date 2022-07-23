import "./RecipeCard.css";
import RecipeIngredients from "./RecipeIngredients";
import Card from "../UI/Card";
import RecipeHeader from "./RecipeHeader";
import RecipeInstructions from "./RecipeInstructions";
import React, {useState} from 'react';

function RecipeCard(props) {

  return (
    <Card>
      <RecipeHeader recipes={props.recipes} />
      <RecipeIngredients ingredients={props.recipes.ingredients} />
      <RecipeInstructions instructions={props.recipes.instructions} />
    </Card>
  );
}

export default RecipeCard;

//<img src={require("../../assets/squash.jpg")} alt="squash"></img>