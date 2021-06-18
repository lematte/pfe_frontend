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

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
//redux
import {Redirect} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {signup} from '../../actions/index';

const currencies = [
  {
    value: 'formateur',
    label: 'formateur',
  },
  {
    value: 'centre_formation',
    label: 'centre de formation',
  },
  {
    value: 'candidat',
    label: 'candidat',
  },
];

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="http://localhost:3001/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const theme = createMuiTheme({
  palette: {
    primary: {
      // This is green
      main: '#11cb5f',
    },
    secondary: {
      main: 'rgba(0, 0, 0, 0.26)',
    },
  },
});

export default function SignUp(props) {
  //role
  const [role, setCurrency] = useState('formateur');
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  //autre
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Prenom, setPrenom] = useState('');
  const [Nom, setNom] = useState('');
  const [Nom_centre, setNom_centre] = useState('');
  const [Téléphone, setTéléphone] = useState('');

  //const auth = useSelector((state) => state.auth);
  const classes = useStyles();
  const dispatch = useDispatch();
  const register = useSelector((state) => state.register);

  const userSignup = (e) => {
    e.preventDefault();
    console.log(role);
    const user = {
      Email,
      Password,
      role,
      Prenom,
      Nom,
      Nom_centre,
      Téléphone,
    };
    dispatch(signup(user));
  };
  if (register.register) {
    return <Redirect to="/login"/>;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <form className={classes.form} noValidate onSubmit={userSignup}>
              <Grid container spacing={2}>
                <TextField style={{display: 'none'}}></TextField>
                <Grid item xs={12}>
                  <TextField
                    id="standard-select-currency"
                    className="standard-select-currency"
                    select
                    required
                    fullWidth
                    label="Type de compte"
                    value={role}
                    onChange={handleChange}
                    SelectProps={{
                      native: true,
                    }}
                    autoFocus
                    // helperText="Veuillez sélectionner votre Type de compte"
                  >
                    {currencies.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                </Grid>
                {role === 'centre_formation' ? (
                  <>
                    <Grid item xs={12}>
                      <TextField
                        className={clsx(classes.margin, classes.textField)}
                        autoComplete="nom_centre"
                        name="nom_centre"
                        value={Nom_centre}
                        onChange={(e) => {
                          setNom_centre(e.target.value);
                        }}
                        required
                        fullWidth
                        id="nom_centre"
                        label="Name centre"
                      />
                    </Grid>
                  </>
                ) : (
                  <>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        className={clsx(classes.margin, classes.textField)}
                        autoComplete="fname"
                        value={Nom}
                        onChange={(e) => {
                          setNom(e.target.value);
                        }}
                        name="firstName"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        value={Prenom}
                        onChange={(e) => {
                          setPrenom(e.target.value);
                        }}
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="lname"
                      />
                    </Grid>
                  </>
                )}
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    value={Email}
                    type="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    value={Password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    className={clsx(classes.margin, classes.textField)}
                    autoComplete="Téléphone"
                    value={Téléphone}
                    onChange={(e) => {
                      setTéléphone(e.target.value);
                    }}
                    name="Téléphone"
                    required
                    fullWidth
                    id="Téléphone"
                    label="Téléphone"
                  />
                </Grid>
                {/*
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>*/}
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.submit}
              >
                Sign Up
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link href="/login" variant="body2" color="primary">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={5}>
            <Copyright />
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
