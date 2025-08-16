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