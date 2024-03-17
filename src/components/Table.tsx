interface Item {
    value: string;
    label: string;
}

interface Props {
    data: Item[]
}

function Table(props: Props){
    return             <ul className="grid divide-y text-sm">
    {props.data.map((item, index) => (
      <li className="py-2 flex justify-between px-8">
        <span>{item.label}</span>
        <span className="font-bold text-amber-900">{item.value}</span>
      </li>
    ))}
  </ul>
}

export default Table