import { useState } from "react";

export function ListWithUndo() {
  const [rows, setRows] = useState(data);
  const [removedRows, setRemovedRows] = useState([]);

  const removeRow = (row) => {
    setRows(rows.filter(({ id }) => row.id !== id));
    setRemovedRows(removedRows.concat(row));
  };

  const undoLatestRemove = () => {
    const lastRemovedRow = removedRows[removedRows.length - 1];
    const restoredRows = rows
      .concat(lastRemovedRow)
      .sort((a, b) => a.id - b.id);
    setRows(restoredRows);
    setRemovedRows(removedRows.slice(0, -1));
  };

  return (
    <>
      <button
        onClick={() => undoLatestRemove()}
        disabled={removedRows.length === 0}
      >
        Undo Last Action
      </button>

      <ul>
        {rows.map((row) => (
          <li key={row.id}>
            <button onClick={() => removeRow(row)}>Delete</button>
            {row.name}
          </li>
        ))}
      </ul>
    </>
  );
}

const data = [
  {
    id: 1,
    name: "Row 1",
  },
  {
    id: 2,
    name: "Row 2",
  },
  {
    id: 3,
    name: "Row 3",
  },
  {
    id: 4,
    name: "Row 4",
  },
  {
    id: 5,
    name: "Row 5",
  },
  {
    id: 6,
    name: "Row 6",
  },
];
