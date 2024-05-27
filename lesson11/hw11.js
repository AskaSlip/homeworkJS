// - взяти https://dummyjson.com/docs/carts та вивести інформацію
// про всі корзини. Відобразити всі поля кожної корзини.
let cartsBlock = document.getElementsByClassName('carts')[0];

let url = new URL('https://dummyjson.com/carts')
url.searchParams.set('limit', 0)

fetch(url)
    .then(value => value.json())
    .then((response) => {
        let carts = response.carts;
        for (const cart of carts) {
            let divCartContainer = document.createElement('div');
            divCartContainer.classList = 'cart';

            let divBillInfo = document.createElement('div')
            divBillInfo.classList = 'bill'
            divBillInfo.innerText = `${cart.id}
                Total products: ${cart.totalProducts}
                Total quantity: ${cart.totalQuantity}
                Total cost: ${cart.total}₴ 
                Discounted total cost: ${cart.discountedTotal}₴ 
                User ID: ${cart.userId}
                `

            let divProduct = document.createElement('div')
            divProduct.classList = 'product'
            for (const product of cart.products) {
                let productInfo = document.createElement('div')
                productInfo.classList = 'about-product'
                productInfo.innerText = `ID: ${product.id}
                Product: ${product.title}
                Price: ${product.price}₴ 
                Quantity: ${product.quantity}
                Total cost: ${product.total}₴ 
                Discount: ${product.discountPercentage}% 
                Total cost with discount: ${product.discountedTotal}₴ `


                let imageContainer = document.createElement('div')
                imageContainer.classList = 'image'
                let image = document.createElement('img')
                image.src = product.thumbnail

                imageContainer.append(image)
                divProduct.append(productInfo, imageContainer)
            }


            divCartContainer.append(divBillInfo, divProduct);

            cartsBlock.appendChild(divCartContainer)


        }


    });


//     - взяти https://dummyjson.com/docs/recipes та вивести інформацію
//     про всі рецепти. Інгредієнти повинні бути список під час відображення.

let recipesBlock = document.getElementsByClassName('recipes')[0];

let urlRecipes = new URL ('https://dummyjson.com/recipes');
urlRecipes.searchParams.set('limit', 0);

fetch(urlRecipes)
    .then((value) => value.json())
    .then((response) => {

        let recipes = response.recipes;
        for (const recipe of recipes) {
            let divRecipeContainer = document.createElement('div')
            divRecipeContainer.classList = 'recipe'

            let divAboutPlate = document.createElement('div')
            divAboutPlate.classList = 'aboutPlate'

            let divImageContainer = document.createElement('div')
            divImageContainer.classList = 'recipeImage'
            let image = document.createElement('img')
            image.src = recipe.image;
            divImageContainer.append(image)



            let divRecipeInfo = document.createElement('div')
            divRecipeInfo.classList = 'recipeInfo'

            divRecipeInfo.innerText = `ID: ${recipe.id}
            user ID: ${recipe.userId}
            Dish name: ${recipe.name}
            Cuisine: ${recipe.cuisine}
            Difficulty: ${recipe.difficulty}
            Meal type: ${recipe.mealType}
            Rating: ${recipe.rating}
            Calories per serving: ${recipe.caloriesPerServing}kcal
            Cooking time: ${recipe.cookTimeMinutes} minutes
            Servings: ${recipe.servings} 
            Preparation time: ${recipe.prepTimeMinutes} minutes
            Reviews: ${recipe.reviewCount}
            Tags: #${recipe.tags}`



            let divInstruction = document.createElement('div')
            divInstruction.classList = 'instruction'

            let ul = document.createElement('ul')
            ul.innerText = `Ingredients:`
            for (const ingredient of recipe.ingredients) {
                let li = document.createElement('li')
                li.innerText = `${ingredient}`
                ul.append(li)
            }

            let ol = document.createElement('ol')
            ol.innerText = `Instruction:`
            for (const step of recipe.instructions) {
                let li = document.createElement('li')
                li.innerText = `${step}`
                ol.append(li)
            }



            divInstruction.append(ul,ol)

            divAboutPlate.append(divImageContainer,divRecipeInfo)
            divRecipeContainer.append(divAboutPlate,divInstruction)

            recipesBlock.appendChild(divRecipeContainer)
        }



});


















//     - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)