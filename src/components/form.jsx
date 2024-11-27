import { useState } from "react";

const Form = () => {
  const [input, setInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
    !error && setInput("");
  };

  const validate = () => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    input === ""
      ? (setErrorMessage("Please insert an email address"), setError(true))
      : !regex.test(input)
        ? (setErrorMessage("Please insert a valid email address"),
          setError(true))
        : (setErrorMessage(""), setError(false));
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="text-left" noValidate>
        <div className="flex">
          <div className="flex w-full gap-2">
            <input
              value={input}
              className="w-full rounded-full p-3 text-black"
              placeholder="Updates in your inbox…"
              onBlur={validate}
              onChange={(e) => setInput(e.target.value)}
              type="email"
            />
            <button className="w-32 rounded-full bg-brightRed" type="submit">
              Go
            </button>
          </div>
        </div>
        {errorMessage && (
          <>
            <em className="pl-3 text-sm text-brightRed">{errorMessage}</em>
          </>
        )}
      </form>
    </>
  );
};

export default Form;
