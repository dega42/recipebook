import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import slugify from 'react-slugify';
import DirectionList from './DirectionList';
import IngredientList from './IngredientList';


function RecipeNewForm(props) {

    const [inputs, setInputs] = useState({ name: '', description: '', directions: [], ingredients: [] });
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const directionRef = useRef(null);
    const ingredientRef = useRef(null);

    async function handleSubmit(e) {
        e.preventDefault();

        // if (!inputs.recipeName.trim()) {
        //     console.log('error');
        // }
        if (!inputs) return
        console.log(inputs);

        inputs.slug = slugify(inputs.name);
        console.log('DATA', inputs);

        const update = await fetch(`http://localhost:3000/api/v1/recipe`, {
            method: 'post',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(inputs)
        })

        if (update.ok) {
            navigate("/");
        }
    }

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    function addDirection() {
        if (!directionRef.current.value) return
        setInputs({ ...inputs, directions: inputs.directions.concat(directionRef.current.value) })
        directionRef.current.value = '';

    }
    function addIngredient() {
        if (!ingredientRef.current.value) return
        setInputs({ ...inputs, ingredients: inputs.ingredients.concat(ingredientRef.current.value) })
        ingredientRef.current.value = '';
    }

    const directionList = inputs && inputs.directions ? inputs.directions.map((value, index) => (
        <DirectionList
            id={inputs.id}
            key={index}
            name={value}
        />
    )) : [];

    const ingredientList = inputs && inputs.ingredients ? inputs.ingredients.map((value, index) => (
        <IngredientList
            id={inputs.id}
            key={index}
            name={value}
        />
    )) : [];

    return (
        <div className='container'>
            <div className="main-header">
                <h1>New recipe</h1>
                <nav>
                    <ul role='list' className="nav">
                        <li><Link to="/" className="btn">Recipe list</Link></li>
                    </ul>
                </nav>

            </div>
            <div className="wrapper">
                <form className="new-recipe-form" onSubmit={handleSubmit}>
                    <input
                        type='text'
                        name='name'
                        value={inputs.name}
                        //defaultValue={inputs.name}
                        onChange={handleChange}
                    />
                    <textarea
                        name='description'
                        cols="30"
                        rows="3"
                        value={inputs.description}
                        //defaultValue={inputs.description}
                        onChange={handleChange} />

                    <div className="form-group">
                        <input
                            type='text'
                            ref={directionRef}
                        />
                        <button className="btn" onClick={addDirection}>Add direction</button>
                    </div>
                    <ul role='list'>
                        {directionList}
                    </ul>
                    <div className="form-group">
                        <input
                            type="text"
                            id="recipeIngredient"
                            ref={ingredientRef}
                        />
                        <button className="btn" onClick={addIngredient}>Add ingredient</button>
                    </div>

                    <ul role={'list'}>
                        {ingredientList}
                    </ul>
                    <button className="btn btn-primary">Add recipe</button>
                    <button className="btn">Cancel</button>
                </form>
            </div>
        </div>
    )
}

export default RecipeNewForm