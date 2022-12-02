// this code was taken from the React docs
// https://beta.reactjs.org/learn/choosing-the-state-structure#avoid-deeply-nested-state

import { useState } from "react";

const initialTravelPlan = {
  id: 0,
  title: "(Root)",
  childPlaces: [
    {
      id: 1,
      title: "Africa",
      childPlaces: [
        {
          id: 2,
          title: "Botswana",
          childPlaces: [],
        },
        {
          id: 3,
          title: "Egypt",
          childPlaces: [],
        },
        {
          id: 4,
          title: "Kenya",
          childPlaces: [],
        },
      ],
    },
    {
      id: 5,
      title: "Americas",
      childPlaces: [
        {
          id: 6,
          title: "Argentina",
          childPlaces: [],
        },
        {
          id: 7,
          title: "Brazil",
          childPlaces: [],
        },
        {
          id: 8,
          title: "Barbados",
          childPlaces: [],
        },
        {
          id: 9,
          title: "Canada",
          childPlaces: [],
        },
        {
          id: 10,
          title: "Jamaica",
          childPlaces: [],
        },
      ],
    },
    {
      id: 11,
      title: "Asia",
      childPlaces: [
        {
          id: 12,
          title: "China",
          childPlaces: [],
        },
        {
          id: 13,
          title: "Hong Kong",
          childPlaces: [],
        },
        {
          id: 14,
          title: "India",
          childPlaces: [],
        },
        {
          id: 15,
          title: "Singapore",
          childPlaces: [],
        },
      ],
    },
  ],
};

function PlaceTree({ place }) {
  const childPlaces = place.childPlaces;
  return (
    <li>
      {place.title}
      {childPlaces.length > 0 && (
        <ol>
          {childPlaces.map((place) => (
            <PlaceTree key={place.id} place={place} />
          ))}
        </ol>
      )}
    </li>
  );
}

export function TravelPlan() {
  const [plan, setPlan] = useState(initialTravelPlan);
  const planets = plan.childPlaces;
  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {planets.map((place) => (
          <PlaceTree key={place.id} place={place} />
        ))}
      </ol>
    </>
  );
}
