// Challenge: Remove the redundant state
// Difficulty: Advanced

import { useState } from "react";

export function ListWithSelectableItems() {
  const [checkedIds, setCheckedIds] = useState([]);
  const [isEveryItemSelected, setIsEveryItemSelected] = useState(false);
  const [numSelected, setNumSelected] = useState(0);

  const handleChange = (id) => {
    let updatedCheckedIds;
    if (checkedIds.includes(id)) {
      updatedCheckedIds = checkedIds.filter((checkedId) => checkedId !== id);
    } else {
      updatedCheckedIds = checkedIds.concat(id);
    }
    setCheckedIds(updatedCheckedIds);
    setNumSelected(updatedCheckedIds.length);

    let isAnyUnselected = false;
    items.forEach((item) => {
      if (!updatedCheckedIds.includes(item.id)) {
        isAnyUnselected = true;
      }
    });
    setIsEveryItemSelected(!isAnyUnselected);
  };

  const toggleAll = () => {
    if (isEveryItemSelected) {
      setCheckedIds([]);
      setNumSelected(0);
    } else {
      setCheckedIds(items.map(({ id }) => id));
      setNumSelected(items.length);
    }
  };

  return (
    <>
      <div>{numSelected} items are selected</div>
      <label>
        <input
          type="checkbox"
          checked={isEveryItemSelected}
          onChange={() => toggleAll()}
        />
        Toggle all
      </label>
      <ul>
        {items.map(({ id, text }) => (
          <li key={id}>
            <label>
              <input
                type="checkbox"
                checked={checkedIds.includes(id)}
                onChange={() => handleChange(id)}
              />
              {text}
            </label>
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
