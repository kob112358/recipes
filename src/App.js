import logo from './logo.svg';
import './App.css';
import RecipeCard from './components/Recipe/RecipeCard';

function App() {
  const recipes = [
    {
      name: 'Autumn Squash Soup',
      serves: 4,
      tags: ['entree', 'vegetarian'],
      prepTime: 20,
      cookTime: 40,
      ingredients: ['2 tablespoons extra-virgin olive oil', '1 large yellow onion, chopped', '½ teaspoon sea salt', 
        '1 (3-pound) butternut squash, peeled, seeded, and cubed',
        '3 garlic cloves, chopped',
        '1 tablespoon chopped fresh sage',
        '½ tablespoon minced fresh rosemary',
        '1 teaspoon grated fresh ginger',
        '3 to 4 cups vegetable broth',
        'Freshly ground black pepper'],
        instructions: ['Heat the oil in a large pot over medium heat. Add the onion, salt, and several grinds of fresh pepper and sauté until soft, 5 to 8 minutes. Add the squash and cook until it begins to soften, stirring occasionally, for 8 to 10 minutes.',
          'Add the garlic, sage, rosemary, and ginger. Stir and cook 30 seconds to 1 minute, until fragrant, then add 3 cups of the broth. Bring to a boil, cover, and reduce heat to a simmer. Cook until the squash is tender, 20 to 30 minutes.',
          'Let cool slightly and pour the soup into a blender, working in batches if necessary, and blend until smooth. If your soup is too thick, add up to 1 cup more broth and blend. Season to taste and serve with parsley, pepitas, and crusty bread.']
    }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <RecipeCard recipes={recipes} />
      </header>
    </div>
  );
}

export default App;
