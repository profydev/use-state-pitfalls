import { useState } from "react";

export function RedundantStateEasy() {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);

  const onChangeEmail = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    // in production you'd rather use a validation library like Yup or Zod
    setIsEmailValid(!!newEmail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/));
  };

  return (
    <input
      style={{ background: isEmailValid ? "white" : "red" }}
      value={email}
      onChange={onChangeEmail}
      placeholder="Email"
    />
  );
}
