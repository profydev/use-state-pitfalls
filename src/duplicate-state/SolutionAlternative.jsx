import { useMemo, useState } from "react";

export function DuplicateState() {
  const [selectedItemId, setSelectedItemId] = useState();
  const selectedItem = useMemo(
    () => items.find(({ id }) => id === selectedItemId),
    [items, selectedItemId]
  );

  const onClickItem = (id) => {
    setSelectedItemId(id);
  };

  return (
    <>
      <ul>
        {items.map(({ id, text }) => (
          <li key={id}>
            <button onClick={() => onClickItem(id)}>Open</button>
            {text}
          </li>
        ))}
      </ul>
      {selectedItem && <div>Selected item: {JSON.stringify(selectedItem)}</div>}
    </>
  );
}

const items = [
  {
    id: "item-1",
    text: "Item 1",
  },
  {
    id: "item-2",
    text: "Item 2",
  },
  {
    id: "item-3",
    text: "Item 3",
  },
  {
    id: "item-4",
    text: "Item 4",
  },
  {
    id: "item-5",
    text: "Item 5",
  },
];
