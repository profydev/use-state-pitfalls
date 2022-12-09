// Solution: By updating both states together in a reducer
// we can easily spot when we forget to update one of the
// variables. And that was the cause for the bug.

import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "remove":
      return {
        rows: state.rows.filter(({ id }) => action.row.id !== id),
        removedRows: state.removedRows.concat(action.row),
      };
    case "undo":
      const lastRemovedRow = state.removedRows[state.removedRows.length - 1];
      const restoredRows = state.rows
        .concat(lastRemovedRow)
        .sort((a, b) => a.id - b.id);
      return {
        rows: restoredRows,
        removedRows: state.removedRows.slice(0, -1),
      };
    default:
      throw new Error();
  }
}

export function ListWithUndo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <button
        onClick={() => dispatch({ type: "undo" })}
        disabled={state.removedRows.length === 0}
      >
        Undo Last Action
      </button>

      <ul>
        {state.rows.map((row) => (
          <li key={row.id}>
            <button onClick={() => dispatch({ type: "remove", row })}>
              Delete
            </button>
            {row.name}
          </li>
        ))}
      </ul>
    </>
  );
}

const rows = [
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

const initialState = { rows, removedRows: [] };
