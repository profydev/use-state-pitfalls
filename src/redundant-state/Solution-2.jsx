// "isEveryItemSelected" and "numSelected" are redundant and
// can be derived from "checkedIds" directly inside the JSX

import { useState } from "react";

function ListWithSelectableItems() {
  const [checkedIds, setCheckedIds] = useState([]);

  const handleChange = (id) => {
    if (checkedIds.includes(id)) {
      setCheckedIds(checkedIds.filter((checkedId) => checkedId !== id));
    } else {
      setCheckedIds(checkedIds.concat(id));
    }
  };

  const toggleAll = (event) => {
    if (event.target.checked) {
      setCheckedIds(items.map(({ id }) => id));
    } else {
      setCheckedIds([]);
    }
  };

  return (
    <>
      <div>{checkedIds.length} items are selected</div>
      <label>
        <input
          type="checkbox"
          checked={checkedIds.length === items.length}
          onChange={toggleAll}
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

export function App() {
  return <ListWithSelectableItems items={items} />;
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
