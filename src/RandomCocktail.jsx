import { useState } from "react"

const RandomCocktail = (prop) => {
    const cocktail = prop.cocktail

    const ingredients = [];
    for (let i = 1; i <= 15; i++) {
        const ingredient = cocktail[`strIngredient${i}`];
        const amount = cocktail[`strMeasure${i}`] ? cocktail[`strMeasure${i}`] : '';

        if (ingredient) {
            ingredients.push(`${amount} ${ingredient}`);
        }
    }

    return (
        <>
            <h1>{cocktail.strDrink}</h1>
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
            <p>{cocktail.strInstructions}</p>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
        </>
    )
}

export default RandomCocktail