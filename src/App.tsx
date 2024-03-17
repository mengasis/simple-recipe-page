import Divider from "./components/Divider";
import Image from "./components/Image";
import InfoBox from "./components/InfoBox";
import Instruction from "./components/Instruction";
import Table from "./components/Table";
import Title from "./components/Title";

function App() {
  const nutritionData = [
    { label: "Calories", value: "277kcal" },
    { label: "Carbs", value: "0g" },
    { label: "Protein", value: "20g" },
    { label: "Fat", value: "22g" },
  ];

  return (
    <div className="bg-orange-100 flex justify-center">
      <div className=" bg-white w-full md:max-w-3xl md:my-28 flex flex-col justify-center rounded-2xl">
        <Image src="/recipe.jpg" />

        <div className="p-8">
          <h1 className="text-3xl mb-4">Simple Omelette Recipe</h1>

          <span className="text-sm">
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </span>

          <InfoBox
            title="Preparation time"
            totalTime={10}
            preparationTime={5}
            cookingTime={5}
          />
          
          <Divider />

          <Title>Ingredients</Title>

          <ul className="list-disc mb-4 list-inside text-sm marker:text-amber-900">
            <li className="mb-2">2-3 large eggs</li>
            <li className="mb-2">Salt, to taste</li>
            <li className="mb-2">Papper, to taste</li>
            <li className="mb-2">1 tablespoon of butter or oil</li>
            <li className="mb-2">
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>

          <Divider />

          <Title>Instructions</Title>

          <ul className="list-decimal list-inside marker:text-amber-900 text-sm">
            <Instruction
              title="Beat the eggs"
              description="In a bowl, beat
              the eggs with a pinch of salt and pepper until they are well
              mixed. You can add a tablespoon of water or milk for a fluffier
              texture."
            />
            <Instruction
              title="Heat the pan"
              description="Place a non-stick
              frying pan over medium heat and add butter or oil."
            />
            <Instruction
              title="Cook the omelette"
              description="Once the
              butter is melted and bubbling, pour in the eggs. Tilt the pan to
              ensure the eggs evenly coat the surface."
            />
            <Instruction
              title="Add fillings (optional)"
              description="When
              the eggs begin to set at the edges but are still slightly runny in
              the middle, sprinkle your chosen fillings over one half of the
              omelette."
            />
          </ul>

          <Divider />

          <Title>Nutrition</Title>

          <span>
            The table below shows nutritional values per serving without the
            additional fillings.
          </span>

          <div className="my-4">
            <Table data={nutritionData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
