import { Grid, AppBar, makeStyles, Button, Typography } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoginDialogAction } from "../reduxDucks/loginDucks";
import { getUsersAction, setLoginAction } from "../reduxDucks/mainDuck";


const useStyles = makeStyles((theme) => ({
    appBarContainer: {
        padding: theme.spacing(2, 2, 2, 2)
    },
    loginButton: {
        textTransform: 'none',
        color: '#ffff'
    }
}))


export default function NavBar() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { login } = useSelector(state => state.main)
    useEffect(() => {
        dispatch(getUsersAction());
    }, [])
    return (
        <>
            <Grid container>
                <Grid item>
                    <AppBar position='fixed'>
                        <Grid container className={classes.appBarContainer} >
                            <Grid item xs={6}>
                                <Grid container justify='flex-start'>
                                    <Grid item>
                                        <Typography variant='h4'>
                                            DogApi
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={6}>
                                <Grid container justify='flex-end'>
                                    <Grid item>
                                        {!login ?
                                            <Button
                                                className={classes.loginButton}
                                                onClick={() => dispatch(setLoginDialogAction(true))}
                                            >
                                                <Typography variant='h6'>
                                                    Iniciar Sesión
                                                </Typography>
                                            </Button>
                                            :
                                            <Button
                                                className={classes.loginButton}
                                                onClick={() => dispatch(setLoginAction(false))}
                                            >
                                                <Typography variant='h6'>
                                                    Cerrar Sesión
                                                </Typography>
                                            </Button>
                                        }
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </AppBar>
                </Grid>
            </Grid>
        </>
    )
}
