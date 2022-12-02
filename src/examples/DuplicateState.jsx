import { useState } from "react";

export function DuplicateState() {
  const [selectedItem, setSelectedItem] = useState();

  const onClickItem = (item) => {
    setSelectedItem(item);
  };

  useEffect(() => {
    if (selectedItem) {
      setSelectedItem(items.find(({ id }) => id === selectedItem.id));
    }
  }, [items]);

  return (
    <>
      {selectedItem && (
        <div>This is a fake modal: {JSON.stringify(selectedItem)}</div>
      )}
      <ul>
        {items.map((row) => (
          <li key={row.id}>
            {row.text}
            <button onClick={() => onClickItem(row)}>Open in modal</button>
          </li>
        ))}
      </ul>
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
