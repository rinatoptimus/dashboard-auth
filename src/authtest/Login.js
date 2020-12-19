import React, { useRef, useState } from "react";

import { useAuth } from "./contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
// import { FormControl } from "@material-ui/core/FormControl";
// import { InputLabel } from "@material-ui/core/InputLabel";
// import { Input } from "@material-ui/core/Input";
// import { Button } from "@material-ui/core/Button";

import Alert from "@material-ui/lab/Alert";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <>
      <div>
        <div>
          <h2 className="text-center mb-4">Войдите в аккаунт</h2>
          {error && <Alert variant="standard">{error}</Alert>}
          <form onSubmit={handleSubmit}>
            <div id="email">
              <label>Email</label>
              <input type="email" ref={emailRef} required />
            </div>
            <div id="password">
              <label>Пароль</label>
              <input type="password" ref={passwordRef} required />
            </div>
            <button disabled={loading} className="w-100" type="submit">
              Войти
            </button>
          </form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Забыли пароль?</Link>
          </div>
        </div>
      </div>
      <div className="w-100 text-center mt-2">
        Зарегистрировать аккаунт? <Link to="/signup">Зарегистрироваться</Link>
      </div>
    </>
  );
}
