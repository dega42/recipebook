import React, { useState, useEffect } from 'react'
import Checklist from "./Checklist";
import { useParams, Link, useNavigate } from 'react-router-dom';

function RecipeView() {

    const [recipe, setRecipe] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const { slug } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3000/api/v1/recipe/slug/${slug}`)
            .then((response) => response.json())
            .then((response) => {
                setRecipe(response);
                setError(null);
            })
            .catch(setError);

    }, []);

    const addTimes = async () => {
        recipe.times++;
        setRecipe(recipe);
        const update = await fetch(`http://localhost:3000/api/v1/recipe/times/${recipe.id}`, {
            method: 'put',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(recipe)
        })
        if (update.ok) {
            navigate("/");
        }
    }

    const directionChecklist = recipe && recipe.directions ? recipe.directions.map((value, index) => (
        <Checklist
            key={index}
            name={value}
        />
    )) : [];

    const ingredientChecklist = recipe && recipe.ingredients ? recipe.ingredients.map((value, index) => (
        <Checklist
            key={index}
            name={value}
        />
    )) : [];

    return (
        <div className="container">
            <div className="main-header">
                <h1>Recipe</h1>
                <nav>
                    <ul role='list' className="nav">
                        <li><Link to={'/' + recipe.slug + '/edit'} className="btn" id={recipe.id}>Edit</Link></li>
                        <li><Link to="/" className="btn">Recipe list</Link></li>
                        <li><Link to="/new-recipe" className="btn">New recipe</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="wrapper">
                <h2>{recipe.name} ({recipe.times})</h2>
                <h3>Description:</h3>
                <p>{recipe.description}</p>
                <h3>Ingredients:</h3>
                <ul role='list'>
                    {ingredientChecklist}
                </ul>
                <h3>Directions:</h3>
                <ul role='list'>
                    {directionChecklist}
                </ul>
                <button className="btn" onClick={addTimes}>I made it</button>
            </div>
        </div>
    )
}

export default RecipeView;