// Data Bahan Makanan (Ingredients Database)
const avocadoSVG = `<svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor"><path d="M12 2c-4.4 0-8 5.4-8 12s3.6 8 8 8 8-1.4 8-8-3.6-12-8-12zm0 18c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z"/></svg>`;
const bananaSVG = `<svg viewBox="0 0 100 100" width="1em" height="1em" fill="currentColor"><path d="M 10 90 C 20 20, 80 10, 90 20 C 70 40, 40 80, 10 90 Z"/></svg>`;
const broccoliSVG = `<svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor"><path d="M12 2c-2.2 0-4 1.8-4 4 0 .5.1.9.3 1.3C5.9 7.7 4 9.6 4 12c0 2.2 1.8 4 4 4h1l1 6h4l1-6h1c2.2 0 4-1.8 4-4 0-2.4-1.9-4.3-4.3-4.7.2-.4.3-.8.3-1.3 0-2.2-1.8-4-4-4z"/></svg>`;
const yogurtSVG = `<svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor"><path d="M2 12c0 4.4 3.6 8 8 8h4c4.4 0 8-3.6 8-8H2zm10-9c-2.2 0-4 1.8-4 4h2c0-1.1.9-2 2-2s2 .9 2 2h2c0-2.2-1.8-4-4-4z"/></svg>`;
const almondSVG = `<svg viewBox="0 0 100 100" width="1em" height="1em" fill="currentColor"><path d="M 10 50 C 10 20, 90 20, 90 50 C 90 80, 10 80, 10 50 Z" transform="rotate(-30 50 50)"/></svg>`;

const ingredientsData = [
    { id: "ing-avocado", nameKey: "ing_avocado", svg: avocadoSVG, calories: 160, protein: 2, carbs: 9, fat: 15, category: "fat", unit: "1", unitKey: "unit_buah" },
    { id: "ing-chicken", nameKey: "ing_chicken", icon: "fa-solid fa-drumstick-bite", calories: 165, protein: 31, carbs: 0, fat: 3.6, category: "protein", unit: "100", unitKey: "unit_g" },
    { id: "ing-salmon", nameKey: "ing_salmon", icon: "fa-solid fa-fish", calories: 208, protein: 20, carbs: 0, fat: 13, category: "protein", unit: "100", unitKey: "unit_g" },
    { id: "ing-egg", nameKey: "ing_egg", icon: "fa-solid fa-egg", calories: 78, protein: 6, carbs: 0.6, fat: 5, category: "protein", unit: "1", unitKey: "unit_butir" },
    { id: "ing-banana", nameKey: "ing_banana", svg: bananaSVG, calories: 105, protein: 1.3, carbs: 27, fat: 0.3, category: "veg", unit: "1", unitKey: "unit_buah" },
    { id: "ing-broccoli", nameKey: "ing_broccoli", svg: broccoliSVG, calories: 34, protein: 2.8, carbs: 7, fat: 0.4, category: "veg", unit: "100", unitKey: "unit_g" },
    { id: "ing-oatmeal", nameKey: "ing_oatmeal", icon: "fa-solid fa-bowl-rice", calories: 190, protein: 6.5, carbs: 33, fat: 3, category: "carb", unit: "50", unitKey: "unit_g" },
    { id: "ing-brownrice", nameKey: "ing_brownrice", icon: "fa-solid fa-bowl-food", calories: 111, protein: 2.6, carbs: 23, fat: 0.9, category: "carb", unit: "100", unitKey: "unit_g" },
    { id: "ing-yogurt", nameKey: "ing_yogurt", svg: yogurtSVG, calories: 130, protein: 15, carbs: 6, fat: 4, category: "protein", unit: "150", unitKey: "unit_g" },
    { id: "ing-almond", nameKey: "ing_almond", svg: almondSVG, calories: 170, protein: 6, carbs: 6, fat: 15, category: "fat", unit: "30", unitKey: "unit_g" },
    { id: "ing-bread", nameKey: "ing_bread", icon: "fa-solid fa-bread-slice", calories: 80, protein: 4, carbs: 15, fat: 1, category: "carb", unit: "1", unitKey: "unit_lembar" },
    { id: "ing-apple", nameKey: "ing_apple", icon: "fa-solid fa-apple-whole", calories: 95, protein: 0.5, carbs: 25, fat: 0.3, category: "veg", unit: "1", unitKey: "unit_buah" },
    { id: "ing-potato", nameKey: "ing_potato", icon: "fa-solid fa-circle", calories: 87, protein: 2, carbs: 20, fat: 0.1, category: "carb", unit: "100", unitKey: "unit_g" },
    { id: "ing-beef", nameKey: "ing_beef", icon: "fa-solid fa-bacon", calories: 250, protein: 26, carbs: 0, fat: 17, category: "protein", unit: "100", unitKey: "unit_g" },
    { id: "ing-spinach", nameKey: "ing_spinach", icon: "fa-solid fa-leaf", calories: 23, protein: 2.9, carbs: 3.6, fat: 0.4, category: "veg", unit: "100", unitKey: "unit_g" },
    { id: "ing-cheese", nameKey: "ing_cheese", icon: "fa-solid fa-cheese", calories: 120, protein: 7, carbs: 0.4, fat: 10, category: "fat", unit: "30", unitKey: "unit_g" }
];

const recipesData = [
    {
        nameKey: "rec_avocado_name", descKey: "rec_avocado_desc", tagKey: "tag_breakfast",
        requiredIngredients: ["ing-bread", "ing-avocado", "ing-egg"],
        calories: 318, protein: 12, carbs: 24, fat: 21
    },
    {
        nameKey: "rec_chicken_name", descKey: "rec_chicken_desc", tagKey: "tag_lunch",
        requiredIngredients: ["ing-brownrice", "ing-chicken", "ing-broccoli"],
        calories: 310, protein: 36.4, carbs: 37, fat: 4.9
    },
    {
        nameKey: "rec_oatmeal_name", descKey: "rec_oatmeal_desc", tagKey: "tag_energy",
        requiredIngredients: ["ing-oatmeal", "ing-banana", "ing-almond"],
        calories: 465, protein: 13.8, carbs: 66, fat: 18.3
    },
    {
        nameKey: "rec_salmon_name", descKey: "rec_salmon_desc", tagKey: "tag_omega",
        requiredIngredients: ["ing-salmon", "ing-spinach"],
        calories: 231, protein: 22.9, carbs: 3.6, fat: 13.4
    },
    {
        nameKey: "rec_yogurt_name", descKey: "rec_yogurt_desc", tagKey: "tag_snack",
        requiredIngredients: ["ing-yogurt", "ing-apple", "ing-banana"],
        calories: 330, protein: 16.8, carbs: 58, fat: 4.6
    },
    {
        nameKey: "rec_steak_name", descKey: "rec_steak_desc", tagKey: "tag_dinner",
        requiredIngredients: ["ing-beef", "ing-potato", "ing-broccoli"],
        calories: 371, protein: 30.8, carbs: 34, fat: 17.5
    }
];

// Translations Dictionary
const translations = {
    id: {
        appTitle: "Perencana Nutrisi Pintar",
        targetGoalTitle: "Target & Tujuan Harian",
        goalBalance: "Diet Seimbang",
        goalLoss: "Turun Berat Badan",
        goalGain: "Tambah Otot",
        detailTargetTitle: "Detail Target Nutrisi",
        labelCalories: "Kalori (kcal)",
        labelProtein: "Protein (g)",
        labelCarbs: "Karbo (g)",
        labelFat: "Lemak (g)",
        infoDragText: "Geser (drag) bahan makanan dari laci ke waktu makan di sebelah kanan untuk menyusun menu harian Anda.",
        btnAutoPlan: "Susun Menu Otomatis",
        btnReset: "Atur Ulang Rencana",
        caloriesAchieved: "Pencapaian Kalori",
        macroComposition: "Komposisi Makronutrisi",
        macroProtein: "Protein",
        macroCarbs: "Karbohidrat",
        macroFat: "Lemak",
        waterTrackerTitle: "Target Minum Harian",
        waterGlasses: "Gelas",
        drawerTitle: "Laci Bahan Makanan",
        searchPlaceholder: "Cari bahan...",
        catAll: "Semua Kategori",
        catProtein: "Sumber Protein",
        catCarb: "Sumber Karbohidrat",
        catFat: "Sumber Lemak",
        catVeg: "Sayur & Buah",
        mealSlotsTitle: "Susunan Menu Makan",
        mealBreakfast: "Sarapan Pagi",
        mealLunch: "Makan Siang",
        mealDinner: "Makan Malam",
        mealSnack: "Cemilan / Lainnya",
        dropHere: "Geser bahan makanan di sini",
        recipesTitle: "Rekomendasi Menu Masakan",
        noRecipes: "Tambahkan bahan makanan ke menu makan Anda untuk melihat rekomendasi resep masakan sehat.",
        noRecipesMatch: "Belum ada resep yang cocok. Coba variasi seperti Telur, Roti, Ayam, dll.",
        modalAddMenu: "Tambahkan ke Menu",
        modalSelectTime: "Pilih jadwal makan untuk bahan ini.",
        confirmTitle: "Konfirmasi",
        confirmDesc: "Hapus semua rencana makanan?",
        btnCancel: "Batal",
        btnYesDelete: "Ya, Hapus",
        
        // Dynamic Strings
        greetingMorning: "Selamat Pagi",
        greetingAfternoon: "Selamat Siang",
        greetingEvening: "Selamat Sore",
        greetingNight: "Selamat Malam",
        chef: "Chef",
        percentAchieved: "% Terpenuhi",
        matchPercent: "% Cocok",
        toastReset: "Semua rencana telah diatur ulang",
        toastAutoPlan: "✨ Menu Otomatis Berhasil Disusun!",
        toastGoalChange: "Target diperbarui ke:",
        toastAddSuccess: "Berhasil menambahkan",
        toastWaterSuccess: "Luar Biasa! Target cairan tercapai 💧",
        
        // Ingredients
        ing_avocado: "Alpukat",
        ing_chicken: "Dada Ayam",
        ing_salmon: "Ikan Salmon",
        ing_egg: "Telur Rebus",
        ing_banana: "Pisang",
        ing_broccoli: "Brokoli",
        ing_oatmeal: "Oatmeal",
        ing_brownrice: "Nasi Merah",
        ing_yogurt: "Greek Yogurt",
        ing_almond: "Kacang Almond",
        ing_bread: "Roti Gandum",
        ing_apple: "Apel",
        ing_potato: "Kentang Rebus",
        ing_beef: "Daging Sapi",
        ing_spinach: "Bayam",
        ing_cheese: "Keju Cheddar",

        // Units
        unit_buah: "buah",
        unit_butir: "butir",
        unit_lembar: "lembar",
        unit_g: "g",

        // Recipes
        rec_avocado_name: "Avocado Toast & Egg",
        rec_chicken_name: "Nasi Merah & Ayam Brokoli",
        rec_oatmeal_name: "Oatmeal Pisang & Almond",
        rec_salmon_name: "Salmon Panggang Bayam",
        rec_yogurt_name: "Greek Yogurt Salad Buah",
        rec_steak_name: "Steak Kentang & Brokoli",
        
        tag_breakfast: "Sarapan Sehat",
        tag_lunch: "Makan Siang Utama",
        tag_energy: "Energi Booster",
        tag_omega: "Menu Tinggi Omega-3",
        tag_snack: "Cemilan Segar",
        tag_dinner: "Makan Malam Premium",

        rec_avocado_desc: "Roti gandum panggang yang diolesi alpukat halus, disajikan dengan telur rebus di atasnya. Kombinasi protein, karbohidrat kompleks, dan lemak sehat.",
        rec_chicken_desc: "Dada ayam panggang gurih disajikan dengan nasi merah hangat dan brokoli kukus. Sangat tinggi protein dan rendah lemak jahat.",
        rec_oatmeal_desc: "Bubur gandum oatmeal hangat yang ditaburi irisan pisang manis dan kacang almond renyah sebagai pengisi energi yang tahan lama.",
        rec_salmon_desc: "Fillet salmon panggang kaya omega-3 yang disajikan di atas bayam tumis bawang putih yang lezat dan rendah kalori.",
        rec_yogurt_desc: "Mangkuk yogurt segar berprotein tinggi yang dicampur dengan irisan apel manis dan pisang segar.",
        rec_steak_desc: "Daging sapi panggang juicy dengan karbohidrat dari kentang rebus dan vitamin melimpah dari brokoli hijau."
    },
    en: {
        appTitle: "Smart Nutrition Planner",
        targetGoalTitle: "Daily Goals & Targets",
        goalBalance: "Balanced Diet",
        goalLoss: "Weight Loss",
        goalGain: "Muscle Gain",
        detailTargetTitle: "Nutrition Target Details",
        labelCalories: "Calories (kcal)",
        labelProtein: "Protein (g)",
        labelCarbs: "Carbs (g)",
        labelFat: "Fat (g)",
        infoDragText: "Drag ingredients from the drawer to the meal slots on the right to plan your daily menu.",
        btnAutoPlan: "Auto-Plan Menu",
        btnReset: "Reset Plan",
        caloriesAchieved: "Calories Achieved",
        macroComposition: "Macro Composition",
        macroProtein: "Protein",
        macroCarbs: "Carbs",
        macroFat: "Fat",
        waterTrackerTitle: "Daily Water Target",
        waterGlasses: "Glasses",
        drawerTitle: "Ingredients Drawer",
        searchPlaceholder: "Search ingredients...",
        catAll: "All Categories",
        catProtein: "Protein Sources",
        catCarb: "Carb Sources",
        catFat: "Fat Sources",
        catVeg: "Vegetables & Fruits",
        mealSlotsTitle: "Meal Plan Slots",
        mealBreakfast: "Breakfast",
        mealLunch: "Lunch",
        mealDinner: "Dinner",
        mealSnack: "Snack / Other",
        dropHere: "Drag ingredients here",
        recipesTitle: "Recipe Recommendations",
        noRecipes: "Add ingredients to your meals to see healthy recipe recommendations.",
        noRecipesMatch: "No matching recipes yet. Try adding Egg, Bread, Chicken, etc.",
        modalAddMenu: "Add to Menu",
        modalSelectTime: "Select meal time for this ingredient.",
        confirmTitle: "Confirmation",
        confirmDesc: "Clear all meal plans?",
        btnCancel: "Cancel",
        btnYesDelete: "Yes, Clear",

        // Dynamic Strings
        greetingMorning: "Good Morning",
        greetingAfternoon: "Good Afternoon",
        greetingEvening: "Good Evening",
        greetingNight: "Good Night",
        chef: "Chef",
        percentAchieved: "% Achieved",
        matchPercent: "% Match",
        toastReset: "All plans have been reset",
        toastAutoPlan: "✨ Daily menu successfully auto-generated!",
        toastGoalChange: "Target changed to:",
        toastAddSuccess: "Successfully added",
        toastWaterSuccess: "Awesome! Daily water target reached 💧",

        // Ingredients
        ing_avocado: "Avocado",
        ing_chicken: "Chicken Breast",
        ing_salmon: "Salmon",
        ing_egg: "Boiled Egg",
        ing_banana: "Banana",
        ing_broccoli: "Broccoli",
        ing_oatmeal: "Oatmeal",
        ing_brownrice: "Brown Rice",
        ing_yogurt: "Greek Yogurt",
        ing_almond: "Almonds",
        ing_bread: "Whole Wheat Bread",
        ing_apple: "Apple",
        ing_potato: "Boiled Potato",
        ing_beef: "Beef",
        ing_spinach: "Spinach",
        ing_cheese: "Cheddar Cheese",

        // Units
        unit_buah: "pcs",
        unit_butir: "pcs",
        unit_lembar: "slice",
        unit_g: "g",

        // Recipes
        rec_avocado_name: "Avocado Toast & Egg",
        rec_chicken_name: "Brown Rice & Chicken Broccoli",
        rec_oatmeal_name: "Banana Almond Oatmeal",
        rec_salmon_name: "Grilled Salmon with Spinach",
        rec_yogurt_name: "Greek Yogurt Fruit Bowl",
        rec_steak_name: "Beef Steak & Broccoli",
        
        tag_breakfast: "Healthy Breakfast",
        tag_lunch: "Main Lunch",
        tag_energy: "Energy Booster",
        tag_omega: "High Omega-3",
        tag_snack: "Fresh Snack",
        tag_dinner: "Premium Dinner",

        rec_avocado_desc: "Toasted whole wheat bread spread with mashed avocado, served with a boiled egg on top. A great mix of protein, complex carbs, and healthy fats.",
        rec_chicken_desc: "Savory grilled chicken breast served with warm brown rice and steamed broccoli. Very high in protein and low in bad fats.",
        rec_oatmeal_desc: "Warm oatmeal porridge topped with sweet banana slices and crunchy almonds for long-lasting energy.",
        rec_salmon_desc: "Omega-3 rich grilled salmon fillet served over delicious and low-calorie garlic sautéed spinach.",
        rec_yogurt_desc: "A fresh, high-protein yogurt bowl mixed with sweet apple slices and fresh bananas.",
        rec_steak_desc: "Juicy grilled beef with carbohydrates from boiled potatoes and abundant vitamins from green broccoli."
    }
};

let currentLang = localStorage.getItem('nutritionPlannerLang') || 'id';

function t(key) {
    return translations[currentLang][key] || key;
}

function applyTranslation() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if(el.tagName === 'SPAN' && el.querySelector('.dot')) {
            // Special case for macros to preserve the colored dot
            const dot = el.querySelector('.dot').outerHTML;
            el.innerHTML = `${dot}${t(key)}`;
        } else {
            el.innerHTML = t(key);
        }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = t(key);
    });
    const langBtnSpan = document.getElementById('lang-label');
    if(langBtnSpan) {
        langBtnSpan.textContent = currentLang === 'id' ? 'EN' : 'ID';
    }
    
    initHeaderInfo(); // refresh greeting & date
    renderIngredients();
    renderMealDropzones();
    updateRecipeRecommendations();
    
    // Also re-render active goals text in toasts? No need.
}

// Presets Goal / Target
const goalPresets = {
    balance: { calories: 2000, protein: 120, carbs: 230, fat: 65 },
    loss: { calories: 1500, protein: 110, carbs: 160, fat: 45 },
    gain: { calories: 2500, protein: 160, carbs: 320, fat: 65 }
};

// State Aplikasi
let state = {
    goals: { ...goalPresets.balance },
    meals: { breakfast: [], lunch: [], dinner: [], snack: [] },
    activeGoal: "balance",
    prevStats: { calories: 0, protein: 0, carbs: 0, fat: 0 },
    hasCelebrated: false
};

// Load State from Local Storage
const savedState = localStorage.getItem('nutritionPlannerState');
if (savedState) {
    try {
        const parsed = JSON.parse(savedState);
        state.goals = parsed.goals || state.goals;
        state.meals = parsed.meals || state.meals;
        state.activeGoal = parsed.activeGoal || state.activeGoal;
        state.hasCelebrated = parsed.hasCelebrated || false;
    } catch (e) {
        console.error("Error loading state", e);
    }
}

function saveStateToLocalStorage() {
    localStorage.setItem('nutritionPlannerState', JSON.stringify({
        goals: state.goals,
        meals: state.meals,
        activeGoal: state.activeGoal,
        hasCelebrated: state.hasCelebrated
    }));
}

// DOM Elements
const ingredientsGrid = document.getElementById("ingredients-grid");
const searchInput = document.getElementById("search-ingredient");
const categoryFilter = document.getElementById("filter-category");
const resetBtn = document.getElementById("reset-plan-btn");
const toast = document.getElementById("toast");
const langToggleBtn = document.getElementById("lang-toggle-btn");

// Goal Preset Buttons
const goalBtns = {
    balance: document.getElementById("goal-balance-btn"),
    loss: document.getElementById("goal-loss-btn"),
    gain: document.getElementById("goal-gain-btn")
};

// Target Inputs
const inputs = {
    calories: document.getElementById("calories-target"),
    protein: document.getElementById("protein-target"),
    carbs: document.getElementById("carbs-target"),
    fat: document.getElementById("fat-target")
};

// Displays
const displays = {
    targetCalories: document.getElementById("target-calories-display"),
    targetProtein: document.getElementById("target-protein-display"),
    targetCarbs: document.getElementById("target-carbs-display"),
    targetFat: document.getElementById("target-fat-display"),
    currentCalories: document.getElementById("current-calories"),
    currentProtein: document.getElementById("current-protein"),
    currentCarbs: document.getElementById("current-carbs"),
    currentFat: document.getElementById("current-fat"),
    caloriePercent: document.getElementById("calorie-percent-text"),
    calorieProgressPath: document.getElementById("calorie-progress-path"),
    proteinProgressBar: document.getElementById("protein-progress-bar"),
    carbsProgressBar: document.getElementById("carbs-progress-bar"),
    fatProgressBar: document.getElementById("fat-progress-bar"),
    recipesGrid: document.getElementById("recipes-grid")
};

// Meal Calorie Summaries
const mealCaloriesDisplays = {
    breakfast: document.getElementById("breakfast-calories"),
    lunch: document.getElementById("lunch-calories"),
    dinner: document.getElementById("dinner-calories"),
    snack: document.getElementById("snack-calories")
};

// Meal Dropzones
const dropzones = {
    breakfast: document.getElementById("breakfast-dropzone"),
    lunch: document.getElementById("lunch-dropzone"),
    dinner: document.getElementById("dinner-dropzone"),
    snack: document.getElementById("snack-dropzone")
};

// Animation Helper (Smooth Number Counting)
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const easeOutQuad = progress * (2 - progress);
        const currentVal = (progress === 1) ? end : start + (end - start) * easeOutQuad;
        element.innerHTML = currentVal % 1 !== 0 ? currentVal.toFixed(1) : Math.floor(currentVal);
        if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
}

// Set Dynamic Greeting and Date
function initHeaderInfo() {
    const today = new Date();
    const hour = today.getHours();
    let greeting = t("greetingMorning");
    
    if (hour >= 5 && hour < 12) greeting = t("greetingMorning");
    else if (hour >= 12 && hour < 15) greeting = t("greetingAfternoon");
    else if (hour >= 15 && hour < 18) greeting = t("greetingEvening");
    else greeting = t("greetingNight");

    document.getElementById('greeting-title').innerHTML = `${greeting}, <span style="color:var(--accent);">${t("chef")}!</span>`;
    
    const locale = currentLang === 'id' ? 'id-ID' : 'en-US';
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById("current-date").innerText = today.toLocaleDateString(locale, options);
}

// Render Ingredient Cards
function renderIngredients() {
    const query = searchInput.value.toLowerCase();
    const category = categoryFilter.value;

    ingredientsGrid.innerHTML = "";

    const filtered = ingredientsData.filter(item => {
        const localizedName = t(item.nameKey).toLowerCase();
        const matchesSearch = localizedName.includes(query);
        const matchesCategory = category === "all" || item.category === category;
        return matchesSearch && matchesCategory;
    });

    filtered.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("ingredient-card");
        card.setAttribute("draggable", "true");
        card.setAttribute("data-id", item.id);

        const displayName = t(item.nameKey);
        const displayUnit = `${item.unit} ${t(item.unitKey)}`;

        card.innerHTML = `
            <div class="ingredient-emoji">${item.svg ? item.svg : `<i class="${item.icon}"></i>`}</div>
            <div class="ingredient-name" title="${displayName}">${displayName}</div>
            <div class="ingredient-calories">${item.calories} kcal / ${displayUnit}</div>
            <div class="ingredient-macros">
                <span class="macro-p" title="Protein">P: ${item.protein}g</span>
                <span class="macro-c" title="Carbs">K: ${item.carbs}g</span>
                <span class="macro-f" title="Fat">L: ${item.fat}g</span>
            </div>
        `;

        card.addEventListener("dragstart", handleDragStart);
        card.addEventListener("dragend", handleDragEnd);
        card.addEventListener("click", () => handleIngredientClick(item, displayName));

        ingredientsGrid.appendChild(card);
    });
}

// Toast Notification
function showToast(message, isError = false) {
    toast.innerText = message;
    if (isError) toast.classList.add("error");
    else toast.classList.remove("error");
    
    toast.classList.add("show");
    setTimeout(() => { toast.classList.remove("show"); }, 3500);
}

// Celebration Effect
function triggerCelebration() {
    if (typeof confetti === "function" && !state.hasCelebrated) {
        confetti({
            particleCount: 150, spread: 80, origin: { y: 0.6 },
            colors: ['#10b981', '#34d399', '#f59e0b', '#4f46e5', '#ffffff']
        });
        state.hasCelebrated = true; 
    }
}

// Drag & Drop Handlers
let draggedItemId = null;
function handleDragStart(e) {
    draggedItemId = this.getAttribute("data-id");
    this.classList.add("dragging");
    e.dataTransfer.setData("text/plain", draggedItemId);
}
function handleDragEnd() {
    this.classList.remove("dragging");
    draggedItemId = null;
}

function setupDropzones() {
    Object.values(dropzones).forEach(zone => {
        zone.addEventListener("dragover", e => { e.preventDefault(); zone.classList.add("drag-over"); });
        zone.addEventListener("dragleave", () => { zone.classList.remove("drag-over"); });
        zone.addEventListener("drop", e => {
            e.preventDefault();
            zone.classList.remove("drag-over");
            const id = e.dataTransfer.getData("text/plain") || draggedItemId;
            const mealType = zone.getAttribute("data-meal");
            if (id) addIngredientToMeal(id, mealType);
        });
    });
}

function addIngredientToMeal(ingId, mealType) {
    const ingredient = ingredientsData.find(i => i.id === ingId);
    if (!ingredient) return;
    const newItem = { uniqueId: Date.now() + Math.random().toString(36).substr(2, 5), ...ingredient };
    state.meals[mealType].push(newItem);
    updateAppView();
    showToast(`${t("toastAddSuccess")} ${t(newItem.nameKey)}`);
}

let currentSelectedIngredientForModal = null;
function handleIngredientClick(ingredient, displayName) {
    currentSelectedIngredientForModal = ingredient;
    document.getElementById('meal-modal-title').innerText = `${t("modalAddMenu")}: ${displayName}`;
    document.getElementById('meal-selector-modal').classList.add('active');
    document.getElementById('modal-overlay').classList.add('active');
}

function removeIngredientFromMeal(uniqueId, mealType, element) {
    element.style.transform = "scale(0.8) translateX(20px)";
    element.style.opacity = "0";
    setTimeout(() => {
        state.meals[mealType] = state.meals[mealType].filter(item => item.uniqueId !== uniqueId);
        updateAppView();
        const totalCals = Object.values(state.meals).flat().reduce((sum, item) => sum + item.calories, 0);
        if (totalCals < state.goals.calories * 0.95) state.hasCelebrated = false; 
    }, 300);
}

function renderMealDropzones() {
    Object.keys(state.meals).forEach(mealType => {
        const zone = dropzones[mealType];
        const items = state.meals[mealType];
        
        const placeholder = zone.querySelector(".drop-placeholder");
        zone.innerHTML = "";
        
        if (items.length === 0) {
            if(placeholder) {
                // Ensure placeholder text is translated
                placeholder.querySelector('p').innerText = t("dropHere");
                zone.appendChild(placeholder);
            } else {
                zone.innerHTML = `<div class="drop-placeholder"><i class="fa-solid fa-plus"></i><p>${t("dropHere")}</p></div>`;
            }
        } else {
            items.forEach(item => {
                const itemEl = document.createElement("div");
                itemEl.classList.add("dropped-item");
                const displayName = t(item.nameKey);
                itemEl.innerHTML = `
                    <div class="dropped-item-info">
                        <span class="dropped-item-emoji">${item.svg ? item.svg : `<i class="${item.icon}"></i>`}</span>
                        <div class="dropped-item-details">
                            <span class="dropped-item-name">${displayName}</span>
                            <span class="dropped-item-stats">${item.calories} kcal | P: ${item.protein}g</span>
                        </div>
                    </div>
                    <button class="remove-dropped-item" data-id="${item.uniqueId}" title="Remove">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                `;
                itemEl.querySelector(".remove-dropped-item").addEventListener("click", function(e) {
                    e.stopPropagation();
                    removeIngredientFromMeal(item.uniqueId, mealType, itemEl);
                });
                zone.appendChild(itemEl);
            });
        }
    });
}

function recalculateNutrition() {
    let totalCalories = 0, totalProtein = 0, totalCarbs = 0, totalFat = 0;
    Object.keys(state.meals).forEach(mealType => {
        let mealCal = 0;
        state.meals[mealType].forEach(item => {
            mealCal += item.calories; totalCalories += item.calories;
            totalProtein += item.protein; totalCarbs += item.carbs; totalFat += item.fat;
        });
        const mealEl = mealCaloriesDisplays[mealType];
        const oldMealCal = parseInt(mealEl.innerText) || 0;
        if(oldMealCal !== mealCal) {
            animateValue(mealEl, oldMealCal, mealCal, 600);
            setTimeout(() => { mealEl.innerHTML += " kcal"; }, 650);
        }
    });

    animateValue(displays.currentCalories, state.prevStats.calories, Math.round(totalCalories), 800);
    animateValue(displays.currentProtein, state.prevStats.protein, totalProtein, 800);
    animateValue(displays.currentCarbs, state.prevStats.carbs, totalCarbs, 800);
    animateValue(displays.currentFat, state.prevStats.fat, totalFat, 800);
    state.prevStats = { calories: totalCalories, protein: totalProtein, carbs: totalCarbs, fat: totalFat };

    const calPercent = Math.min(Math.round((totalCalories / state.goals.calories) * 100), 1000);
    displays.caloriePercent.innerText = `${calPercent}${t("percentAchieved")}`;
    
    const dashVal = Math.min(calPercent, 100);
    displays.calorieProgressPath.setAttribute("stroke-dasharray", `${dashVal}, 100`);

    if (totalCalories > state.goals.calories * 1.1) {
        displays.calorieProgressPath.style.stroke = "#ef4444";
        displays.calorieProgressPath.style.filter = "drop-shadow(0 0 10px #ef4444)";
        displays.caloriePercent.style.color = "#ef4444";
    } else if (totalCalories >= state.goals.calories * 0.95 && totalCalories <= state.goals.calories * 1.05) {
        displays.calorieProgressPath.style.stroke = "#f59e0b";
        displays.calorieProgressPath.style.filter = "drop-shadow(0 0 10px #f59e0b)";
        displays.caloriePercent.style.color = "#f59e0b";
        triggerCelebration();
    } else {
        displays.calorieProgressPath.style.stroke = "var(--accent)";
        displays.calorieProgressPath.style.filter = "drop-shadow(0 0 6px var(--accent))";
        displays.caloriePercent.style.color = "var(--accent)";
    }

    const protPercent = Math.min((totalProtein / state.goals.protein) * 100, 100);
    const carbsPercent = Math.min((totalCarbs / state.goals.carbs) * 100, 100);
    const fatPercent = Math.min((totalFat / state.goals.fat) * 100, 100);
    displays.proteinProgressBar.style.width = `${protPercent}%`;
    displays.carbsProgressBar.style.width = `${carbsPercent}%`;
    displays.fatProgressBar.style.width = `${fatPercent}%`;
}

function updateRecipeRecommendations() {
    const presentIds = [];
    Object.values(state.meals).forEach(mealList => {
        mealList.forEach(item => { if (!presentIds.includes(item.id)) presentIds.push(item.id); });
    });

    if (presentIds.length === 0) {
        displays.recipesGrid.innerHTML = `<div class="no-recipes"><p>${t("noRecipes")}</p></div>`;
        return;
    }

    const scoredRecipes = recipesData.map(recipe => {
        const matched = recipe.requiredIngredients.filter(id => presentIds.includes(id));
        const matchPercentage = Math.round((matched.length / recipe.requiredIngredients.length) * 100);
        return { ...recipe, matchedCount: matched.length, matchPercentage };
    }).filter(r => r.matchedCount > 0).sort((a, b) => b.matchPercentage - a.matchPercentage);

    if (scoredRecipes.length === 0) {
        displays.recipesGrid.innerHTML = `<div class="no-recipes"><p>${t("noRecipesMatch")}</p></div>`;
        return;
    }

    displays.recipesGrid.innerHTML = "";

    scoredRecipes.forEach((recipe, idx) => {
        const card = document.createElement("div");
        card.classList.add("recipe-card");
        card.style.animationDelay = `${idx * 0.1}s`;
        
        const ingredientsNeededHtml = recipe.requiredIngredients.map(ingId => {
            const ingObj = ingredientsData.find(i => i.id === ingId);
            const isPresent = presentIds.includes(ingId);
            const badgeClass = isPresent ? "badge-present" : "badge-missing";
            const icon = isPresent ? '<i class="fa-solid fa-check"></i>' : '<i class="fa-solid fa-xmark"></i>';
            return `<span class="ing-badge ${badgeClass}">${icon} ${ingObj ? t(ingObj.nameKey) : ''}</span>`;
        }).join(" ");

        card.innerHTML = `
            <div class="recipe-meta">
                <span class="recipe-tag">${t(recipe.tagKey)}</span>
                <span class="recipe-match">${recipe.matchPercentage}${t("matchPercent")}</span>
            </div>
            <h4 class="recipe-title">${t(recipe.nameKey)}</h4>
            <p class="recipe-desc">${t(recipe.descKey)}</p>
            <div class="ingredients-list-small">
                ${ingredientsNeededHtml}
            </div>
            <div class="recipe-nutrition">
                <span><b>${recipe.calories}</b> kcal</span>
                <span>P: <b>${recipe.protein}</b>g | K: <b>${recipe.carbs}</b>g | L: <b>${recipe.fat}</b>g</span>
            </div>
        `;
        displays.recipesGrid.appendChild(card);
    });

    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll(".recipe-card"), { max: 10, speed: 400, glare: true, "max-glare": 0.2 });
    }
}

function updateAppView() {
    renderMealDropzones();
    recalculateNutrition();
    updateRecipeRecommendations();
    saveStateToLocalStorage();
}

function syncGoalInputs() {
    inputs.calories.value = state.goals.calories; inputs.protein.value = state.goals.protein;
    inputs.carbs.value = state.goals.carbs; inputs.fat.value = state.goals.fat;
    displays.targetCalories.innerText = state.goals.calories; displays.targetProtein.innerText = state.goals.protein;
    displays.targetCarbs.innerText = state.goals.carbs; displays.targetFat.innerText = state.goals.fat;
    
    state.hasCelebrated = false;
    recalculateNutrition();
}

function setActiveGoal(goalKey) {
    state.activeGoal = goalKey;
    state.goals = { ...goalPresets[goalKey] };
    
    Object.keys(goalBtns).forEach(key => {
        if (key === goalKey) goalBtns[key].classList.add("active");
        else goalBtns[key].classList.remove("active");
    });

    syncGoalInputs();
    const goalNameKeys = { balance: "goalBalance", loss: "goalLoss", gain: "goalGain" };
    showToast(`${t("toastGoalChange")} ${t(goalNameKeys[goalKey])}`);
}

function initEventListeners() {
    Object.keys(goalBtns).forEach(key => {
        goalBtns[key].addEventListener("click", () => setActiveGoal(key));
    });

    Object.keys(inputs).forEach(key => {
        inputs[key].addEventListener("change", function() {
            const val = parseFloat(this.value) || 0;
            state.goals[key] = val;
            Object.values(goalBtns).forEach(btn => btn.classList.remove("active"));
            if (key === "calories") displays.targetCalories.innerText = Math.round(val);
            if (key === "protein") displays.targetProtein.innerText = Math.round(val);
            if (key === "carbs") displays.targetCarbs.innerText = Math.round(val);
            if (key === "fat") displays.targetFat.innerText = Math.round(val);
            state.hasCelebrated = false;
            recalculateNutrition();
        });
    });

    searchInput.addEventListener("input", renderIngredients);
    categoryFilter.addEventListener("change", renderIngredients);

    resetBtn.addEventListener("click", () => {
        document.getElementById('confirm-modal').classList.add('active');
        document.getElementById('modal-overlay').classList.add('active');
    });

    langToggleBtn.addEventListener("click", () => {
        currentLang = currentLang === 'id' ? 'en' : 'id';
        localStorage.setItem('nutritionPlannerLang', currentLang);
        applyTranslation();
    });
}

function initModals() {
    const overlay = document.getElementById('modal-overlay');
    const mealModal = document.getElementById('meal-selector-modal');
    const confirmModal = document.getElementById('confirm-modal');
    
    function closeModal() {
        overlay.classList.remove('active');
        mealModal.classList.remove('active');
        confirmModal.classList.remove('active');
        currentSelectedIngredientForModal = null;
    }

    overlay.addEventListener('click', closeModal);
    document.getElementById('close-meal-modal').addEventListener('click', closeModal);
    document.getElementById('close-confirm-modal').addEventListener('click', closeModal);
    document.getElementById('confirm-cancel-btn').addEventListener('click', closeModal);

    document.getElementById('confirm-ok-btn').addEventListener('click', () => {
        state.meals = { breakfast: [], lunch: [], dinner: [], snack: [] };
        state.hasCelebrated = false;
        updateAppView();
        showToast(t("toastReset"));
        closeModal();
    });

    document.querySelectorAll('.meal-option-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const mealType = e.currentTarget.getAttribute('data-meal');
            if (currentSelectedIngredientForModal && mealType) {
                addIngredientToMeal(currentSelectedIngredientForModal.id, mealType);
            }
            closeModal();
        });
    });
}

function initWaterTracker() {
    const container = document.getElementById('water-tracker');
    const countDisplay = document.getElementById('water-count');
    if(!container) return;
    
    let waterCount = parseInt(localStorage.getItem('nutritionPlannerWater')) || 0;
    const maxWater = 8;
    
    const renderGlasses = () => {
        container.innerHTML = "";
        countDisplay.innerText = waterCount;
        for(let i = 0; i < maxWater; i++) {
            const glass = document.createElement('div');
            glass.className = 'water-glass';
            if (i < waterCount) glass.classList.add('filled');
            glass.innerHTML = `<div class="water-fill"></div><i class="fa-solid fa-glass-water"></i>`;
            
            glass.addEventListener('click', () => {
                if (i < waterCount) waterCount = i;
                else {
                    waterCount = i + 1;
                    if (waterCount === maxWater && window.confetti) {
                        confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
                        showToast(t("toastWaterSuccess"));
                    }
                }
                localStorage.setItem('nutritionPlannerWater', waterCount);
                renderGlasses();
            });
            container.appendChild(glass);
        }
    };
    renderGlasses();
}

function autoGeneratePlan() {
    state.meals = { breakfast: [], lunch: [], dinner: [], snack: [] }; 
    const mealTypes = ['breakfast', 'lunch', 'dinner'];
    let currentCal = 0;
    let attempts = 0;
    
    while (currentCal < state.goals.calories * 0.90 && attempts < 100) {
        const randomItem = ingredientsData[Math.floor(Math.random() * ingredientsData.length)];
        const randomMeal = mealTypes[Math.floor(Math.random() * mealTypes.length)];
        
        if (currentCal + randomItem.calories <= state.goals.calories * 1.05) {
            state.meals[randomMeal].push({ ...randomItem, instanceId: Date.now() + Math.random() });
            currentCal += randomItem.calories;
        }
        attempts++;
    }
    if (state.goals.calories - currentCal > 100) {
        const snacks = ingredientsData.filter(i => i.category === 'veg' || i.category === 'fat');
        if(snacks.length > 0) {
           const s = snacks[Math.floor(Math.random() * snacks.length)];
           state.meals['snack'].push({ ...s, instanceId: Date.now() + Math.random() });
        }
    }
    updateAppView();
    showToast(t("toastAutoPlan"));
    if (window.confetti) confetti({ particleCount: 150, spread: 100, origin: { y: 0.5 } });
}

function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const closeSidebarBtn = document.getElementById('close-sidebar-btn');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');

    function toggleSidebar() {
        sidebar.classList.toggle('active');
        sidebarOverlay.classList.toggle('active');
    }

    if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', toggleSidebar);
    if (closeSidebarBtn) closeSidebarBtn.addEventListener('click', toggleSidebar);
    if (sidebarOverlay) sidebarOverlay.addEventListener('click', toggleSidebar);
}

function init() {
    applyTranslation();
    syncGoalInputs();
    setupDropzones();
    initEventListeners();
    initModals();
    initWaterTracker();
    initMobileMenu();
    
    const magicBtn = document.getElementById('magic-plan-btn');
    if(magicBtn) magicBtn.addEventListener('click', autoGeneratePlan);
    
    updateAppView();
}

document.addEventListener("DOMContentLoaded", init);
if (document.readyState === "interactive" || document.readyState === "complete") {
    init();
}
