import './App.css';
import { useEffect, useState } from 'react';
import video from './dish.mp4';
import MyRecipesComponent from './MyRecipesComponent';
import findLoop from './find-loop.png';


function App() {

  const MY_ID = "3fd41d89";
  const MY_KEY = "%203f50cec3129551e9084949f9a6e95769";

  const [mySearch, setMySearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState("salmon");

  useEffect(() => {
    const getResponce = async () => {
      const responce = await fetch (`https://api.edamam.com/search?q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await responce.json();
      setMyRecipes(data.hits);
      console.log(data)
    }
    getResponce()
  }, [wordSubmitted])


  const myRecipeSearch = (e) => {
    setMySearch(e.target.value);
  }

  const finalSearch = (e) => {
    e.preventDefault()
    setWordSubmitted(mySearch)
  }

  return (
    <div className="App">
      <div className="container">
        <video autoPlay muted loop>
         <source src={video} type="video/mp4"/>
        </video>
        <h1>Find a Recipe</h1>
      </div>

      <div className='container'>
        <form onSubmit={finalSearch}>
            <input className='search' placeholder='Search...' onChange={myRecipeSearch} value={mySearch} />
        </form>
      </div>

      <div className='container'>
          <button onClick={finalSearch}>
              <img src={findLoop} alt="icon" width='50px' />
            </button>
      </div>

      {myRecipes.map((element, index) => (
        <MyRecipesComponent key={index}
        label={element.recipe.label} 
        image={element.recipe.image} 
        calories={element.recipe.calories} 
        ingredients={element.recipe.ingredientLines}
        weight={element.recipe.totalWeight}



        />
      ))}
    </div>
  );
}

export default App;
