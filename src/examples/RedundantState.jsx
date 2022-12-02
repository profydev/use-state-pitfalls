import { useState } from "react";

export function RedundantState() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const onChangeFirstName = (event) => {
    setFirstName(event.target.value);
    setFullName(`${event.target.value} ${lastName}`);
  };
  const onChangeLastName = (event) => {
    setLastName(event.target.value);
    setFullName(`${firstName} ${event.target.value}`);
  };

  return (
    <>
      <form>
        <input
          value={firstName}
          onChange={onChangeFirstName}
          placeholder="First Name"
        />
        <input
          value={lastName}
          onChange={onChangeLastName}
          placeholder="Last Name"
        />
      </form>
      <div>Full name: {fullName}</div>
    </>
  );
}
