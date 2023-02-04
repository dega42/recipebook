import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import RecipeListView from "./RecipeListView";


function RecipeList() {

    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3000/api/v1/recipe")
            .then((response) => response.json())
            .then((response) => {
                setRecipes(response);
                setError(null);
            })
            .catch((error) => {
                setError('There has been a problem with your fetch operation:', error);
            });

    }, []);
    
    const recipeList = recipes && !recipes.error ? recipes.map((recipe) => (
        <RecipeListView
            id={recipe.id}
            key={recipe.id}
            name={recipe.name}
            slug={recipe.slug}
            description={recipe.description}
            directions={recipe.directions}
            ingerdients={recipe.ingredients}
            times={recipe.times}
        />
        
    )) : [recipes.error]
    
    return (
        <div className="container">
            <div className="main-header">
                <h1>Reciple list</h1>
                {error}
                <nav>
                    <ul role='list' className="nav">
                        <li><Link to="/new-recipe" className="btn">New recipe</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="wrapper">
                <ul role='list'>
                    {recipeList}
                </ul>
            </div>
        </div>
    )
}
export default RecipeList;