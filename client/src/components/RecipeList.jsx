import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import SearchBox from '../components/SearchBox'
import RecipeListView from "./RecipeListView";

function RecipeList() {

    const [recipes, setRecipes] = useState([]);
    const [foundRecipes, setFoundRecipes] = useState([]);
    const [error, setError] = useState(null);

    

    useEffect(() => {

        const fetchRecipe = async () => {
            const fetchData = await fetch("http://localhost:3000/api/v1/recipe");
            const recipes = await fetchData.json();
            setRecipes(recipes)
        }
        fetchRecipe()
            .catch((error) => setError('There has been a problem with your fetch operation: ', error))

    }, []);

    const search = (e) => {
        e.preventDefault()
        
        const findThis = e.target.value;
        if (findThis.length > 0) {
            console.log('FIND',findThis)
                        
            const found = recipes.filter((recipe) => {
                return recipe.name
                .toLowerCase()
                .includes(findThis.toLowerCase())
            })
            setFoundRecipes(found);

            
            console.log('FOUND',found)
            // setRecipes()
        }
    }
    

    return (
        <div className="container">
            <div className="main-header">
                <h1>Recipe list</h1>
                {/* {message} */}
                <nav>
                    <ul role='list' className="nav">
                        <li><Link to="/new-recipe" className="btn">New category</Link></li>
                        <li><Link to="/new-recipe" className="btn">New recipe</Link></li>
                    </ul>
                </nav>
            </div>
            <SearchBox search={search} />
            
            <div className="wrapper">
                <ul role='list'>
                    {(foundRecipes.length > 0 ? foundRecipes : recipes).map((recipe) => (
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