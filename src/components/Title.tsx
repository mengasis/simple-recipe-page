import type { ReactNode } from "react";

interface Props {
    children: ReactNode
}

function Title(props: Props) {
  return (
    <h2 className="text-2xl font-bold text-amber-900 mb-4">{props.children}</h2>
  );
}

export default Title;
