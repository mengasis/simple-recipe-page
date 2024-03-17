
interface Props {
    title: string
    totalTime: number
    preparationTime: number
    cookingTime: number
}


function InfoBox(props: Props){
    return <div className="my-4 text-sm bg-fuchsia-50 rounded-md p-5">
    <span className="font-bold text-base text-fuchsia-900 block mb-4">
      {props.title}
    </span>
    <ul className="list-disc list-inside text-sm marker:text-amber-900">
      <li className="mb-2">
        <span className="font-bold">Total:</span> Approximatly {props.totalTime} minutes.
      </li>
      <li className="mb-2">
        <span className="font-bold">Preparation:</span> {props.preparationTime} minutes.
      </li>
      <li className="mb-2">
        <span className="font-bold">Cooking:</span> {props.cookingTime} minutes.
      </li>
    </ul>
  </div>
}

export default InfoBox