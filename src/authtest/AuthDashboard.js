import React, { useState } from "react";

import { useAuth } from "./contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

import Alert from "@material-ui/lab/Alert";

export default function AuthDashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Не удалось выйти");
    }
  }

  return (
    <>
      <div>
        <div>
          <h2 className="text-center mb-4">Профиль</h2>
          {error && <Alert variant="standard">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Обновить профиль
          </Link>
        </div>
      </div>
      <div className="w-100 text-center mt-2">
        <button variant="link" onClick={handleLogout}>
          Выйти
        </button>
      </div>
    </>
  );
}
