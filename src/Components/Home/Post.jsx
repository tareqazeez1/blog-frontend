import React from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    container: {
        height: 350,
        margin: 10,
        border: '1px solid #d3cede',
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        '& > *': {
            padding: '0 5px 5px 5px',
        }

    },
    image: {
        height: 150,
        width: '100%',
        objectFit: 'cover',
        borderRadius: '10px 10px 0 0',
    },
    text: {
        color: '#878787',
        fontSize: 15
    },
    heading: {
        fontSize: 18,
        fontWeight: 600,
    },
    detail: {
        fontSize: 14,
        wordBreak: 'break-word',
    }
})

const Post = () => {
    const classes = useStyles();
    const url = "data:image/jpeg;base64,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"
    return (
        <Box className={classes.container}>
            <img className={classes.image} src={url} alt="" />
            <Typography className={classes.text}>Music</Typography>
            <Typography className={classes.heading}>Code for interview</Typography>
            <Typography className={classes.text}>Author: Tareq</Typography>
            <Typography className={classes.detail}>This is the first blog</Typography>
        </Box>
    );
};

export default Post;