$(document).ready(function(){

    async function generate () {
        try {
            const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
            const data = await response.json();

            $('#cocktail').empty();
            $('#cocktail').append(
                `<div>
                <h2>${data.drinks[0].strDrink}</h2>
                <img src="${data.drinks[0].strDrinkThumb}">
                <ul>
                <li>${data.drinks[0].strIngredient1}</li>
                <li>${data.drinks[0].strIngredient2}</li>
                <li>${data.drinks[0].strIngredient3}</li>
                <li>${data.drinks[0].strIngredient4}</li>
                <li>${data.drinks[0].strIngredient5}</li>
                <li>${data.drinks[0].strIngredient6}</li>
                <li>${data.drinks[0].strIngredient7}</li>
                <li>${data.drinks[0].strIngredient8}</li>
                <li>${data.drinks[0].strIngredient9}</li>
                <li>${data.drinks[0].strIngredient10}</li>
                </ul>
                <p>${data.drinks[0].strInstructions}</p>
                </div>`
            );

            $("li:contains('null')").remove();
            
            } catch {
                $('h2').append('Nothing found!')
            }
            
        }
        
        $('#submit').click(generate);
        
})