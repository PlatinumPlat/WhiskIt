const container = document.querySelector(".recipecontainer");

function loadRecipes() {
    const recipes = JSON.parse(localStorage.getItem("recipes")) || []
    document.querySelectorAll(".userRecipe").forEach(el => el.remove());

    recipes.forEach((r, index) => {
        const card =  document.createElement("div");
        card.className = `userRecipe ${r.type}Recipes`;

        card.innerHTML = `
            <h2 class="exploretitle">${r.title}</h2>
            <p><pre>${r.desc}</pre></p>
            <p><em>Type: ${r.type}</em></p>
            <button onclick="deleteRecipe(${index})">Delete</button>
        `;

        container.appendChild(card);
    });
}

function deleteRecipe(index) {
    const recipes = JSON.parse(localStorage.getItem("recipes")) || [];
    recipes.splice(index, 1);
    localStorage.setItem("recipes", JSON.stringify(recipes));
    loadRecipes();
}

function cookingRecipes() {
    document.querySelectorAll(".bakingRecipes").forEach(el => el.style.display = "none");
    document.querySelectorAll(".cookingRecipes").forEach(el => el.style.display = "block");
}

function bakingRecipes() {
    document.querySelectorAll(".bakingRecipes").forEach(el => el.style.display = "block");
    document.querySelectorAll(".cookingRecipes").forEach(el => el.style.display = "none");
}

document.getElementById("cooking").addEventListener("click", function () {
    document.getElementById("baking").classList.remove("active");
    document.getElementById("baking").classList.add("inactive");
    document.getElementById("cooking").classList.remove("inactive");
    document.getElementById("cooking").classList.add("active");
    cookingRecipes();
});

document.getElementById("baking").addEventListener("click", function () {
    document.getElementById("baking").classList.remove("inactive");
    document.getElementById("baking").classList.add("active");
    document.getElementById("cooking").classList.remove("active");
    document.getElementById("cooking").classList.add("inactive");
    bakingRecipes();
});


loadRecipes();
cookingRecipes();