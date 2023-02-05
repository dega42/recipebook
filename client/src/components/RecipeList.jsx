import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

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

    return (
        <div className="container">
            <div className="main-header">
                <h1>Recipe list</h1>
                {error}
                <nav>
                    <ul role='list' className="nav">
                        <li><Link to="/new-recipe" className="btn">New recipe</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="wrapper">
                <ul role='list'>
                    {recipes.map((recipe) => (
                        <RecipeListView
                            id={recipe.id}
                            key={recipe.id}
                            name={recipe.name}
                            slug={recipe.slug}
                            description={recipe.description}
                            times={recipe.times}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default RecipeList;