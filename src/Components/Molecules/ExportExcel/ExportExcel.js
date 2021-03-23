import React,{useContext, useState} from 'react'
import { Grid, Card, Hidden,Typography } from '@material-ui/core';
import ReactExport from "react-data-export";

export default function ExportExcel(props) {
    
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

    return (
        <div>
            <ExcelFile element={props.button} filename={props.filename}>
                <ExcelSheet data={props.data} name={props.sheet}>
                    {
                        props.column.map((col,index)=> {
                            return <ExcelColumn key={index} label={col.label} value={col.value}/>
                        })
                    }
                </ExcelSheet>
            </ExcelFile>
        </div>
    )
}
