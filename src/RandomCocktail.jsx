import { useState } from "react"

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
                    <> <h1>{randomCocktail.strDrink}</h1> </>
                ) : (
                    <p>Click on the button to get a random cocktail</p>
                )
            }
        </div>
    )
}

export default RandomCocktail