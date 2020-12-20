import React, { useRef, useState } from "react";

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

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  // для формы:
  const classes = useStyles();
  //

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      console.log(emailRef.current.value)
      history.push("/");
    } catch {
      setError("Не удалось войти");
    }

    setLoading(false);
  }

  return (
    <>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>Введите email и пароль:</Typography>
          {error && <Alert severity="error">{error}</Alert>}
          
          <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
            <div id="email">
              <TextField fullWidth label="Email" id="outlined-basic" variant="outlined" type="email" inputRef={emailRef} required />
            </div>
            <div id="password">
              <TextField fullWidth label="Пароль" id="outlined-basic" variant="outlined" type="password" inputRef={passwordRef} required />
            </div>
            <Button variant="contained" color="primary" disabled={loading} type="submit">
              Войти
            </Button>
          </form>

          <Button>
            <Link to="/forgot-password">Забыли пароль?</Link>
          </Button>
          <Button>
            <Link to="/signup">Зарегистрироваться</Link>
          </Button>
        </CardContent>
      </Card>
    </>
  );
}
