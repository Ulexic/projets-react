const RandomCocktailIngredients = ({ cocktail }) => {
    const ingredients = [];
    for (let i = 1; i <= 15; i++) {
        const ingredient = cocktail[`strIngredient${i}`];
        const amount = cocktail[`strMeasure${i}`] ? cocktail[`strMeasure${i}`] : '';

        if (ingredient) {
            ingredients.push(`${amount} ${ingredient}`);
        }
    }

    return (
        <ul>
            {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
            ))}
        </ul>
    );
}

export default RandomCocktailIngredients;