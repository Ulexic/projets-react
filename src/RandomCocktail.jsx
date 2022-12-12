import { useState } from "react"
import RandomCocktailIngredients from "./RandomCocktailIngredients"

const RandomCocktail = () => {
    const [randomCocktail, setrandomCocktail] = useState(null)

    const onClickHandler = async () => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
            .then(response => response.json())
            .then(data => setrandomCocktail(data.drinks[0]))
    }

    return (
        <div>
            <button onClick={onClickHandler}>Random cocktail</button>
            {
                randomCocktail ? (
                    <>
                        <h1>{randomCocktail.strDrink}</h1>
                        <img src={randomCocktail.strDrinkThumb} alt={randomCocktail.strDrink} />
                        <p>{randomCocktail.strInstructions}</p>
                        <RandomCocktailIngredients cocktail={randomCocktail} />
                    </>
                ) : (
                    <p>Click on the button to get a random cocktail</p>
                )
            }
        </div>
    )
}

export default RandomCocktail