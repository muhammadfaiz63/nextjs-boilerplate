import React,{useContext, useState,useRef,forwardRef} from 'react'
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    Box,
    Grid,
    Hidden,
    TextField,
    CircularProgress,
    Table,
    TableCell,
    TableBody,
    TableRow,
    TableHead,
    TablePagination,
    Card,
    InputLabel,
    MenuItem,
    List,
    ListItem,
    FormControl,
    Snackbar,
    Divider
} from '@material-ui/core';

import ReactToPrint, { useReactToPrint } from 'react-to-print';
import useStyles from './Styles';
import { MerchantContext } from "Contexts/Merchant";
import StaticVar from 'Config/StaticVar';
import { Images } from 'Themes';

export default function ExportPdf(props) {
    const classes = useStyles();
    const { dataMerchant } = useContext(MerchantContext);
    const containerToPrintRef = useRef();

    const ContainerToPrint = forwardRef(() => {
        return (
            <div className="print-source" ref={containerToPrintRef}>
                <div>
                <Grid container style={{marginBottom:10}}>
                    <Grid item xs={1}>
                    <img src={dataMerchant.merchantPicture ? StaticVar.URL_OSS + "/merchant/logo/" + dataMerchant.merchantPicture : Images.hoodaFoodCircleImg} className={classes.logoMerchant} />
                    </Grid>
                    <Grid item xs={11}>
                    <Typography className={classes.contentCardTotalLeftBlack1Txt}>{dataMerchant.merchantName}</Typography>
                    <Typography style={{fontSize:13}}>{dataMerchant.merchantAddress}</Typography>
                    </Grid>
                </Grid>
                {props.content}
                </div>
            </div>
        )
    })

    return (
        <div>
            <ReactToPrint
                trigger={() => props.button}
                content={() => containerToPrintRef.current}
            />
            <ContainerToPrint />
        </div>
    )
}
