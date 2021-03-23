import React from "react";
import { Button,Grid,Typography } from "@material-ui/core";

// styles
import useStyles from "./Styles";

// components

export default function PageTitle(props) {
  var classes = useStyles();

  return (
    <div className={classes.pageTitleContainer}>
      <Grid container>
      <Grid item xs={6}>
        {props.title}
      </Grid>
      <Grid item xs={6}>
        {props.content}
      </Grid>
      </Grid>
    </div>
  );
}
