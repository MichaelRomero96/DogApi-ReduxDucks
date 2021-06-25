import {
    Typography,
    TextField,
    makeStyles,
    Grid,
    Button,
    CardActions
} from '@material-ui/core'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDogsAction } from '../reduxDucks/mainDuck';
//components
import Cards from './Cards'

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(12, 0, 0, 0)
    }
}))


export default function Home() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { dogsImages } = useSelector(state => state.main)
    useEffect(() => {
        dispatch(getDogsAction());
    }, [])
    return (
        <Grid container spacing={3} justify='center' className={classes.root}>
            {dogsImages.map(dog => (
                <Grid item key={dog} >
                    <Cards pet={dog} />
                </Grid>
            ))}
        </Grid>
    )
}
