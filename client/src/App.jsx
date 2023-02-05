import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useReducer } from 'react';
import './App.css';

import RecipeList from './components/RecipeList';
import NewRecipe from './components/RecipeNewForm';
import EditRecipe from './components/RecipeEditForm';
import Recipe from './components/RecipeView';
import Alert from './components/Alert'
import MessageContext from './components/MessageContext'

function App() {

  const [state, dispatch] = useReducer((state, action) => {
    return (
      <Alert message={action.message} />
    )
  })

  return (
    <>
      {state}
      <MessageContext.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RecipeList />} />
            <Route path="/new-recipe" element={<NewRecipe />} />
            <Route path="/:slug" element={<Recipe />} />
            <Route path="/:slug/edit" element={<EditRecipe />} />
            <Route />
          </Routes>
        </BrowserRouter>
      </MessageContext.Provider>
    </>
  );
}

export default App