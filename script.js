document.addEventListener("DOMContentLoaded", () => {
    const recipes = [
        {
            title: "Spaghetti Carbonara",
            description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and black pepper.",
            ingredients: ["200g spaghetti", "2 large eggs", "100g pancetta", "50g Parmesan cheese", "Salt & black pepper", "1 tbsp olive oil"],
            steps: ["Boil spaghetti until al dente.", "Fry pancetta in olive oil until crispy.", "Whisk eggs, cheese, and pepper in a bowl.", "Mix hot pasta with pancetta and egg mixture.", "Stir quickly to create a creamy sauce.", "Serve immediately with extra cheese."]
        },
        {
            title: "Grilled Chicken Salad",
            description: "A fresh and healthy salad with grilled chicken, mixed greens, cherry tomatoes, cucumbers, and a tangy dressing.",
            ingredients: ["1 grilled chicken breast", "2 cups mixed greens", "1/2 cup cherry tomatoes", "1/4 cup sliced cucumber", "2 tbsp balsamic dressing", "Salt & pepper to taste"],
            steps: ["Grill chicken until golden and fully cooked.", "Slice chicken into strips.", "Mix greens, tomatoes, and cucumber.", "Top with grilled chicken.", "Drizzle with balsamic dressing.", "Toss gently and serve fresh."]
        }
    ];

    const modal = document.querySelector(".modal");
    const closeModal = document.querySelector(".close-modal");

    document.querySelectorAll(".btn").forEach((button, index) => {
        button.addEventListener("click", () => {
            const recipe = recipes[index];
            document.querySelector(".modal-title").textContent = recipe.title;
            document.querySelector(".modal-description").textContent = recipe.description;
            document.querySelector(".modal-ingredients").innerHTML = recipe.ingredients.map(item => `<li>${item}</li>`).join("");
            document.querySelector(".modal-steps").innerHTML = recipe.steps.map(step => `<li>${step}</li>`).join("");
            modal.classList.add("show");
        });
    });

    closeModal.addEventListener("click", () => modal.classList.remove("show"));
});
