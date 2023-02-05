import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

import RecipeList from './components/RecipeList';
import NewRecipe from './components/RecipeNewForm';
import EditRecipe from './components/RecipeEditForm';
import Recipe from './components/RecipeView';

function App() {

  // function message(text) {
  //   //messageDialog.showModal();
  //   console.log('message')
  //   setTimeout(() => {
  //     console.log('message close')
  //     //messageDialog.close();
  //   }, 3000);
  // }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/new-recipe" element={<NewRecipe />} />
          <Route path="/:slug" element={<Recipe />} />
          <Route path="/:slug/edit" element={<EditRecipe />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App