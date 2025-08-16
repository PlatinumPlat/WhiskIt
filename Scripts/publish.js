const form = document.getElementById('recipeForm');
const container = document.getElementById('recipeContainer');

function loadRecipes() {
    container.innerHTML = "";
    const recipes = JSON.parse(localStorage.getItem("recipes")) || [];
    recipes.forEach((r, index) => {
        const card = document.createElement("div");
        card.className = `recipe ${r.type}Recipes`;
        card.innerHTML = `
            <h2 class="exploretitle">${r.title}</h2>
            <p><pre>${r.desc}</pre></p>
            <p><em>Type: ${r.type}</em></p>
            <button onclick="deleteRecipe(${index})">Delete</button>
            `;
        container.appendChild(card);
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("recipeTitle").value;
    const desc = document.getElementById("recipeDescription").value;
    const type = document.getElementById("recipeType").value;
    const recipes = JSON.parse(localStorage.getItem("recipes")) || [];

    recipes.push({ title, desc, type })
    localStorage.setItem("recipes", JSON.stringify(recipes));

    form.reset();
    loadRecipes();
});

function deleteRecipe(index) {
    const recipes = JSON.parse(localStorage.getItem("recipes")) || [];
    recipes.splice(index, 1);
    localStorage.setItem("recipes", JSON.stringify(recipes));
    loadRecipes();
}

loadRecipes();