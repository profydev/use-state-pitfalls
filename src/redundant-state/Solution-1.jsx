import { useState } from "react";

export function RedundantStateEasy() {
  const [email, setEmail] = useState("");
  // in production you'd rather use a validation library like Yup or Zod
  const isEmailValid = !!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
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
