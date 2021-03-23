import React from "react";
import { Button,Grid,Typography,Card } from "@material-ui/core";

// styles
import useStyles from "./Styles";

// components

export default function PageTitle(props) {
  var classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid container spacing={3}>
      <Grid item md={props.type === 1 ? 4 : 3}>
        <Card className={classes.cardStyle}>
            {props.contentFirst}
        </Card>
      </Grid>
      <Grid item md={props.type === 1 ? 4 : 9}>
        <Card className={classes.cardStyle}>
            {props.contentSecond}
        </Card>
      </Grid>
      {
        props.type === 1 ?
        <Grid item md={4}>
            <Card className={classes.cardStyle}>
            {props.contentThird}
            </Card>
        </Grid>:null
      }
      </Grid>
    </div>
  );
}
