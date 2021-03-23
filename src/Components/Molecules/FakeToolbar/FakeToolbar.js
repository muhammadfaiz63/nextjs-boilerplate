import React from "react";
import { Button,Grid,Typography } from "@material-ui/core";

// styles
import useStyles from "./Styles";

// components

export default function FakeToolbar(props) {
  var classes = useStyles();

  return (
    <div className={classes.pageTitleContainer}>
      <Grid container>
        {props.content}
      </Grid>
    </div>
  );
}
