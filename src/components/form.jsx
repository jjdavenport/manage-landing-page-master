import { useState } from "react";

const Form = () => {
  const [input, setInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    validate() && !error && setErrorMessage("") && setInput("");
  };

  const validate = () => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    input === ""
      ? (setErrorMessage("Please insert an email address"), setError(true))
      : !regex.test(input)
      ? (setErrorMessage("Please insert a valid email address"), setError(true))
      : (setErrorMessage(""), setError(false), setInput(""));
  };

  return (
    <>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <div className="flex flex-col">
            <input
              value={input}
              placeholder="Updates in your inbox…"
              onBlur={validate}
              onChange={(e) => setInput(e.target.value)}
              type="email"
            />
            {errorMessage && (
              <>
                <span>{errorMessage}</span>
              </>
            )}
          </div>
          <button type="submit">Go</button>
        </div>
      </form>
    </>
  );
};

export default Form;
