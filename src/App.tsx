
function App() {
  return (
    <div>
      <img src="/recipe.jpg" alt="main"/>

<div className="p-8">
      <h1 className="text-3xl mb-4">Simple Omelette Recipe</h1>

      <span className="text-sm">An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</span>
    
    <div className="my-4 text-sm bg-fuchsia-50 rounded-md p-5">
      <span className="font-bold text-base text-fuchsia-900 block mb-4">Preparation time</span>
      <ul className="list-disc list-inside text-sm marker:text-amber-900">
        <li className="mb-2">
          <span className="font-bold">Total:</span> Approximatly 10 minutes.
        </li>
        <li className="mb-2">
          <span className="font-bold">Preparation:</span> 5 minutes.
        </li>
        <li className="mb-2">
          <span className="font-bold">Cooking:</span> 5 minutes.
        </li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold text-amber-900 mb-4">Ingredients</h2>

    <ul className="list-disc mb-4 list-inside text-sm marker:text-amber-900">
      <li className="mb-2">2-3 large eggs</li>
      <li className="mb-2">Salt, to taste</li>
      <li className="mb-2">Papper, to taste</li>
      <li className="mb-2">1 tablespoon of butter or oil</li>
      <li className="mb-2">Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
    </ul>

    <div className="border-t-[1px] mb-4"/>

    <h2 className="text-2xl font-bold text-amber-900 mb-4">Instructions</h2>

    <ul className="list-decimal list-inside marker:text-amber-900 text-sm">
      <li className="mb-2">
        <span className="font-bold">Beat the eggs:</span> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.
      </li>
      <li className="mb-2">
        <span className="font-bold">Heat the pan:</span> Place a non-stick frying pan over medium heat and add butter or oil.
      </li>
      <li className="mb-2">
        <span className="font-bold">Cook the omelette:</span> Once the butter is melted and bubbling, pour in the eggs.
Tilt the pan to ensure the eggs evenly coat the surface.
      </li>

      <li className="mb-2">
        <span className="font-bold">Add fillings (optional):</span> When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.
      </li>
    </ul>

    <div className="border-t-[1px] my-4"/>

    <h2 className="text-2xl font-bold text-amber-900 mb-4">Nutrition</h2>

    <span>The table below shows nutritional values per serving without the additional fillings.</span>

    <div className="my-4">
      <ul className="grid divide-y text-sm">
        <li className="py-2 flex justify-between px-8">
          <span>Calories</span>
          <span className="font-bold text-amber-900">277kcal</span>
        </li>
        <li className="py-2 flex justify-between px-8">
          <span>Carbs</span>
          <span className="font-bold text-amber-900">0g</span>
        </li>
        <li className="py-2 flex justify-between px-8">
          <span>Protein</span>
          <span className="font-bold text-amber-900">20g</span>
        </li>
        <li className="py-2 flex justify-between px-8">
          <span>Fat</span>
          <span className="font-bold text-amber-900">22g</span>
        </li>
      </ul>
    </div>
    </div>
    </div>
  );
}

export default App;
