const recipe = document.querySelector('.recipe');
const AddRecipeBtn = document.querySelector('.add-recipe');
const AddNewRecBtn = document.querySelector('.add-new-recipe');
const insertRecipeSec = document.querySelector('.insert-recipe-sec');
const recName = document.querySelector('.rec-name');
const recDesc = document.getElementById('rec-desc');
const recImg = document.querySelector('.rec-img-src');
const searchBar = document.querySelector('.search-input');

let Recipes = [];


AddRecipeBtn.addEventListener('click', () => {
    recipe.classList.remove('hide');
});


AddNewRecBtn.addEventListener('click', () => {
        const html = `
        <div class="rec-item">
            <img src="${recImg.value}" alt="${recName.value}" class="rec-img">
            <h1 class="recipe-name">${recName.value}</h1>
            <p class="recipe-desc">${recDesc.value}</p>
            <button class="warn">Delete Recipe</button>
        </div>`;
        if(!recName.value == '' && !recDesc.value == '' && !recImg.value == ''){
            insertRecipeSec.insertAdjacentHTML('afterbegin', html);
            Recipes.push(insertRecipeSec.children[0]);
        }else{
            alert('Please fill input fileds')
        }
        const delRecBtn = document.querySelector('.warn');
        delRecBtn.addEventListener('click', (e) => {
            e.stopImmediatePropagation();
            const recipeCard = delRecBtn.closest('.rec-item');
            recipeCard.remove();
        });
        recName.value = recDesc.value = recImg.value = '';
});

function searchRecipe() {
    const filter = searchBar.value.toUpperCase();
    const resList = insertRecipeSec.querySelectorAll('.rec-item');
    for (let i = 0; i < resList.length; i++) {
        const res = resList[i];
        const txtValue = res.children[1].textContent && res.children[1].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            resList[i].style.display = "";
        } else {
            resList[i].style.display = "none";
        }
    }
}

searchBar.addEventListener('keyup', (e) => {
    e.stopImmediatePropagation();
    searchRecipe();
});
