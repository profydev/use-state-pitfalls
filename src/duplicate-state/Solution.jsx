// Solution: The "filteredItems" can be directly
// derived from "filter" and "items"

import { useState } from "react";

function ListWithFilter({ items }) {
  const [filter, setFilter] = useState("TODO");
  const filteredItems = items.filter(({ status }) => status === filter);

  // Alternative: we can useMemo as well. But note: only
  // use when you run into performance issues
  //
  // const filteredItems = useMemo(
  //   () => items.filter(({ status }) => status === filter),
  //   [items, filter]
  // );

  const onChangeFilter = (event) => {
    setFilter(event.target.value);
  };

  return (
    <>
      <select value={filter} onChange={onChangeFilter}>
        <option value="TODO">TODO</option>
        <option value="DONE">DONE</option>
      </select>
      <ul>
        {filteredItems.map(({ id, text }) => (
          <li key={id}>{text}</li>
        ))}
      </ul>
    </>
  );
}

export function App() {
  return <ListWithFilter items={items} />;
}

const items = [
  {
    id: "item-1",
    text: "Item 1",
    status: "TODO",
  },
  {
    id: "item-2",
    text: "Item 2",
    status: "TODO",
  },
  {
    id: "item-3",
    text: "Item 3",
    status: "DONE",
  },
  {
    id: "item-4",
    text: "Item 4",
    status: "TODO",
  },
  {
    id: "item-5",
    text: "Item 5",
    status: "DONE",
  },
];
