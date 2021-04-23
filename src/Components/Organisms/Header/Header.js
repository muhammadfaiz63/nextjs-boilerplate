import React, { useState, useEffect } from "react";
import clsx from 'clsx';

import { makeStyles, useTheme } from '@material-ui/core/styles';

import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  Divider,
  IconButton,
  Hidden,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button
} from '@material-ui/core'

import {
  ArrowBack as ArrowBackIcon,
  AccountCircle as AccountCircleIcon,
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Inbox as InboxIcon,
  Mail as MailIcon
} from "@material-ui/icons";

import { Images, Colors } from "@themes/index"
import useStyles from "./Styles"

const Header = () => {
  const classes = useStyles();

  return (
    <>
        <AppBar
          position="fixed"
          className={clsx(classes.appBar)}
        >
          <Toolbar>
            <IconButton style={{padding:0, color: Colors.snow}}>
              <ChevronLeftIcon />
            </IconButton>
              <img src={Images.logo} alt="img" style={{ marginLeft: 10, width: 50, height: 40, marginRight: 10 }} />
            <Typography
              style={{
                marginLeft: 0,
                fontSize: 13,
                letterSpacing: 3,
                color: "#fff",
                textTransform: "none"
              }}
            >
              Test
            </Typography>
          </Toolbar>
        </AppBar>
    </>
  )
}

export default Header;


