import React, {useEffect, useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import clsx from 'clsx';
import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
//import Alert from '@material-ui/lab/Alert';


import Header from '../../components/Header/index';

import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {login} from '../../actions/index';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

import Layout from '../../components/Layout/index';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="http://localhost:3001">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#5fcf80',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#11cb5f',
    },
  },
});

const SignIn = (props) => {
  const classes = useStyles();

  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [error, setError] = useState('');
  const auth = useSelector((state) => state.auth);
  const message = useSelector((state) => state.auth.error)
  const dispatch = useDispatch();
  const AuthUser = JSON.parse(localStorage.getItem('user'));

  /*if (auth.authenticate && auth.user.role === 'candidat'){
    return  dispatch(getCandidatByIdUser(auth.user._id))
}*/
  if (localStorage.getItem('token') != undefined) {
    if (AuthUser.role === 'candidat') {
      return <Redirect to="/candidat/dashboard/" />;
    } else if (AuthUser.role === 'admin') {
      return <Redirect to="/admin/dashboard" />;
    } else if (AuthUser.role === 'formateur') {
      return <Redirect to="/formateur" />;
    } else if (AuthUser.role === 'centre_formation') {
      return <Redirect to="/centre_formation/dashboard" />;
    }
    // return <Redirect to="/candidat/dashboard" />
  }

  const userLogin = (e) => {
    e.preventDefault();
    const user = {
      Email,
      Password,
    };
    dispatch(login(user));
  };
  /*
  if (auth.authenticate && auth.user.role === 'candidat'){
      return  dispatch(getCandidatByIdUser(auth.user._id))
  }
  if (auth.authenticate) {
    return ;
  } */

  if (auth.authenticate && auth.user.role === 'candidat') {
    return <Redirect to="/candidat/dashboard" />;
  } else if (auth.authenticate && auth.user.role === 'admin') {
    return <Redirect to="/admin/dashboard" />;
  } else if (auth.authenticate && auth.user.role === 'formateur') {
    return <Redirect to="/formateur/dashboard" />;
  } else if (auth.authenticate && auth.user.role === 'centre_formation') {
    return <Redirect to="/centre_formation/dashboard" />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Header />
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form onSubmit={userLogin} className={classes.form} noValidate>
            <div>
              <TextField
                className={clsx(classes.margin, classes.textField)}
                id="standard-basic"
                required
                fullWidth
                value={Email}
                //onChange={(e) => setEmail(e.target.value)}
                name="Email"
                label="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <br />
            <TextField
              className={clsx(classes.margin, classes.textField)}
              id="standard-basic"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              // value={Password}

              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="palette.success.main"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/registre" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <br/>
            <div  className={message ? 'alert alert-danger' : ' '} >
            {message}
            </div>
            
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </ThemeProvider>
  );
};
export default SignIn;
