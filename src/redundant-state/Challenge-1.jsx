// Challenge: Remove the redundant state
// Difficulty: Easy

import { useState } from "react";

export function EmailInput() {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);

  const onChangeEmail = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    // in production you'd rather use a validation library like Yup or Zod
    setIsEmailValid(!!newEmail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/));
  };

  return (
    <>
      <input value={email} onChange={onChangeEmail} placeholder="Email" />
      <div style={{ color: isEmailValid ? "black" : "red" }}>
        Email is {isEmailValid ? "valid" : "invalid"}
      </div>
    </>
  );
}
