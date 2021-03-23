import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import useStyles from "./Styles"

const BoxButton = (props) => {
    const { variant , children , style } = props
    const classes = useStyles(style)

    return (
        <Button type={props.type ? props.type : "submit"} variant={variant} className={classes.style}>
            {children}
        </Button>
    )
}

export default BoxButton
