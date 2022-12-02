import { useState } from "react";

export function DuplicateState() {
  const [filter, setFilter] = useState("TODO");
  const [filteredItems, setFilteredItems] = useState(
    items.filter(({ status }) => status === filter)
  );

  const onChangeFilter = (event) => {
    const newFilter = event.target.value;
    setFilter(newFilter);
    setFilteredItems(items.filter(({ status }) => status === newFilter));
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
