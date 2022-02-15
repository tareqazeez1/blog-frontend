import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { categories } from '../constants/data';


const useStyle = makeStyles({
    create: {
        margin: 20,
        background: 'black',
        color: 'coral',
        width: '86%',
    }
});


const Categories = () => {
    const classes = useStyle();
    return (
        <>
            <Button className={classes.create} variant='contained'>Create Blog</Button>

            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            All Categories
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        categories.map(category => (<TableRow><TableCell>{category}</TableCell></TableRow>))
                    }
                </TableBody>
            </Table>
        </>
    );
};

export default Categories;