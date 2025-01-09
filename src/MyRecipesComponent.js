import done from './done.png';
import kcal from './kcal.png';
import fasting from './fasting.png';

function MyRecipesComponent({label, image, calories, ingredients, weight}) {
    return(<div>
        <div className="container">
            <h2>{label}</h2>
        </div>
        <div className="container">
            <img className='images' src={image} alt="Dish" width='400px'/>
        </div>
        
        <ul className="container list">
            {ingredients.map((ingredient, index) => (
                <li key={index}>
                    <img src={done} alt="icon" className="icon"/> 
                    {ingredient}</li>
            ))}
        </ul>
        
        <div className="container">
            <p className='calorie'>
            <img src={fasting} alt="icon" className="icon"/>Total weight: {weight.toFixed()} g</p>
        </div>
     
        <div className="container">
            <p className='calorie'><img src={kcal} alt="icon" className="icon"/> {calories.toFixed()} calories</p>
        </div>
    </div>)
}

export default MyRecipesComponent;