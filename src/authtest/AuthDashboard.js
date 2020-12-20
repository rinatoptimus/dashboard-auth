import React, { useState } from "react";

import { useAuth } from "./contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

import Alert from "@material-ui/lab/Alert";

//
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 380,
    margin: '20px auto',
    '& .MuiTextField-root': {
      marginBottom: theme.spacing(1)
    }
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  }
}));
//

export default function AuthDashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  // для формы:
  const classes = useStyles();
  //

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
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>Профиль</Typography>
        {error && <Alert severity="error">{error}</Alert>}
        <strong>Email:</strong> {currentUser.email}
        <Button>
          <Link to="/update-profile">
            Обновить профиль
          </Link>
        </Button>
        <Button onClick={handleLogout}>
          Выйти
        </Button>
      </CardContent>
    </>
  );
}
