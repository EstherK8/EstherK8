/* global $ */
(function () {
    'use strict';
    async function fetchData() {
        try {
            const response = await fetch('recipes.json');
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            const text = await response.text();
            let recipeOptions = (JSON.parse(text));
            console.log(recipeOptions);
            const spot = document.getElementById('spot');
            for (let i = 0; i < recipeOptions.recipeCatagories.length; i++) {
                const p = document.createElement('p');
                p.innerText = recipeOptions.recipeCatagories[i];
                spot.appendChild(p);
            }
            const nameSpot = document.getElementById('recipe');
            const ingredientsSpot = $('#ingredients');
            const directionSpot = document.getElementById('directions');
            spot.addEventListener('click',
                recipe => {
                    ingredientsSpot.css('display', 'block');
                    const theRecipe = recipe.target.innerText.toString();
                    console.log(theRecipe);
                    // for general catagory links
                    const catagory = recipeOptions[theRecipe];
                    if (catagory) {
                        for (let i = 0; i < catagory.length; i++) {
                            if (i == 0) {
                                ingredientsSpot.empty();
                            }
                            $(`<a href="cake">${catagory[i]} </a>`).appendTo(ingredientsSpot).click(e => {
                                e.preventDefault();
                                ingredientsSpot.innerText = recipeOptions.recipeDetails[theRecipe];
                                const theRecipeChosen = e.target.innerText;
                                const ingredients = recipeOptions.recipeDetails[theRecipeChosen].ingredients;
                                if (ingredients) {
                                    console.log(ingredients);
                                    ingredientsSpot.empty();
                                    ingredientsSpot.append(ingredients);
                                    directionSpot.innerText = recipeOptions.recipeDetails[theRecipeChosen].instructions;
                                    if (recipeOptions.recipeDetails[theRecipeChosen].image) {
                                        $('#recipeSpot img').css('visibility', 'visible');
                                        $('#recipeSpot img').attr('src', recipeOptions.recipeDetails[theRecipeChosen].image)
                                    }
                                }
                                directionSpot.hidden = false;
                            });
                        }
                    }


                    directionSpot.hidden = true;

                    $('#recipeSpot img').css('visibility', 'hidden');
                    nameSpot.innerText = theRecipe;
                }
            );
        }
        catch (theError) {
            console.log('error occored:' + theError);
        }
    }
    fetchData();







}());