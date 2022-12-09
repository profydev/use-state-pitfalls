// Solution: introduce references from parent to
// children via the child's ID.

import { useState } from "react";

const initialTravelPlan = {
  0: {
    id: 0,
    title: "(Root)",
    childIds: [1, 5, 11],
  },
  1: {
    id: 1,
    title: "Africa",
    childIds: [2, 3, 4],
  },
  2: {
    id: 2,
    title: "Botswana",
    childIds: [],
  },
  3: {
    id: 3,
    title: "Egypt",
    childIds: [],
  },
  4: {
    id: 4,
    title: "Kenya",
    childIds: [],
  },
  5: {
    id: 5,
    title: "Americas",
    childIds: [6, 7, 8, 9, 10],
  },
  6: {
    id: 6,
    title: "Argentina",
    childIds: [],
  },
  7: {
    id: 7,
    title: "Brazil",
    childIds: [],
  },
  8: {
    id: 8,
    title: "Barbados",
    childIds: [],
  },
  9: {
    id: 9,
    title: "Canada",
    childIds: [],
  },
  10: {
    id: 10,
    title: "Jamaica",
    childIds: [],
  },
  11: {
    id: 11,
    title: "Asia",
    childIds: [12, 13, 14, 15],
  },
  12: {
    id: 12,
    title: "China",
    childIds: [],
  },
  13: {
    id: 13,
    title: "Hong Kong",
    childIds: [],
  },
  14: {
    id: 14,
    title: "India",
    childIds: [],
  },
  15: {
    id: 15,
    title: "Singapore",
    childIds: [],
  },
};

function PlaceTree({ id, placesById }) {
  const place = placesById[id];
  const childIds = place.childIds;
  return (
    <li>
      {place.title}
      {childIds.length > 0 && (
        <ol>
          {childIds.map((childId) => (
            <PlaceTree key={childId} id={childId} placesById={placesById} />
          ))}
        </ol>
      )}
    </li>
  );
}

export function TravelPlan() {
  const [plan, setPlan] = useState(initialTravelPlan);
  const root = plan[0];
  const planetIds = root.childIds;
  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {planetIds.map((id) => (
          <PlaceTree key={id} id={id} placesById={plan} />
        ))}
      </ol>
    </>
  );
}
