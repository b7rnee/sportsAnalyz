import React, { useState, useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { useHistory } from "react-router-dom";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SnackBar from '@material-ui/core/Snackbar';
import axios from 'axios';
import { AuthContext } from './AuthContext'
import { Alert } from '@material-ui/lab'
import { ACTIONS } from '../../actions';
const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: '#25d56f',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: '#25d56f'
    },
    root: {
        '&$error': {
            color: 'red'
        },
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    }
}));

export default function Login() {
    const classes = useStyles();
    const [isOpen, setIsOpen] = useState(false)
    const history = useHistory();
    const { state, dispatch } = useContext(AuthContext);
    const [values, setValues] = React.useState({
        username: '',
        validUsername: false,
        password: '',
        validPassword: false,
    });

    const login = () => {
        let tmp = values.username == '' || values.password == ''
        setValues({
            ...values, validPassword: values.password == '',
            validUsername: values.username == ''
        });
        if (tmp) return
        dispatch({ type: ACTIONS.BLOCK })
        axios.get(`/login/${values.username}/${values.password}`).then((res) => {
            history.push("/home");

        }).catch((error) => {
            setIsOpen(true)

        }).finally(() => dispatch({ type: ACTIONS.UNBLOCK }))
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Нэвтрэх
               </Typography>
                <SnackBar autoHideDuration={10000}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    open={isOpen} onClose={() => {
                        setIsOpen(false)

                    }}>
                    <Alert severity="error" >Нууц үг эсвэл нэвтрэх нэр буруу байна</Alert>
                </SnackBar>
                <div className={classes.form} noValidate>

                    <TextField
                        error={values.validUsername}
                        helperText={values.validUsername ? 'Нэвтрэх нэр оруулна уу' : ''}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        value={values.username}
                        id="email"
                        label="Нэвтрэх нэр"
                        name="email"
                        onChange={(event) => {
                            setValues({ ...values, username: event.target.value })
                        }}
                        autoComplete="email"
                        autoFocus
                    />

                    <TextField
                        error={values.validPassword}
                        variant="outlined"
                        margin="normal"
                        required
                        helperText={values.validPassword ? 'Нууц үг оруулна уу' : ''}
                        fullWidth
                        value={values.password}
                        name="password"
                        label="Нууц үг"
                        type="password"
                        id="password"
                        onChange={(event) => {
                            setValues({ ...values, password: event.target.value })
                        }}
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Намайг сана"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={() => {
                            login()
                        }}
                    >
                        Нэвтрэх
          </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Нууц үг мартсан?
              </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/register" variant="body2">
                                {"Бүртгүүлэх"}
                            </Link>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </Container >
    );
}