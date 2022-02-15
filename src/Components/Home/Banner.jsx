import React from 'react';
import banner from '../../assets/diana-polekhina-1ixT36dfuSQ-unsplash - Copy.jpg';
import { Box, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    image: {
        backgroundColor: 'coral',
        height: 500,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& > *': {
            fontSize: 70,
            color: 'black'
        }
    }

})

const Banner = () => {
    const classes = useStyles();
    return (
        <Box className={classes.image}>
            <Typography>BLOG</Typography>
        </Box>
    );
};

export default Banner;