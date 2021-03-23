import { makeStyles } from '@material-ui/styles';
import Colors from "Themes/Colors"

export default makeStyles((theme) => ({
  container: {
    width: '100%'
  },
  titleChartTxt: {
    textAlign: 'left',
    [theme.breakpoints.up('sm')]: {
      fontSize: 15,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 11,
    },
    marginLeft: 15,
    fontWeight: 700
  },
  downloadBtn: {
    marginTop:8,
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 20,
    paddingRight: 20,
    marginLeft: 10,
    backgroundColor: Colors.blue,
    textTransform: "none",
    borderRadius: 10,
    height:40,
    [theme.breakpoints.down('xs')]: {
        width:"100%",
        paddingLeft: 0,
        paddingRight: 0,
    },
},
  formContainer: {
    margin: 0,
    width: '100%',
    marginBottom: 0
  },
  titleTxt: {
    color: '#fff',
    fontSize: 18,
    [theme.breakpoints.down('sm')]: {
      fontSize: 13,
    },
  },
  titleBlackTxt: {
    color: '#000',
    fontSize: 16,
    fontWeight: 600,
    [theme.breakpoints.down('sm')]: {
      fontSize: 13,
    },
  },
  titleBlack2Txt: {
    color: '#000',
    fontSize: 14,
    fontWeight: 500,
    [theme.breakpoints.down('sm')]: {
      fontSize: 13,
    },
  },
  titleBlack6Txt: {
    color: '#000',
    fontSize: 16,
    fontWeight: 600,
    [theme.breakpoints.down('sm')]: {
      fontSize: 11,
    },
  },
  titlePageTxt: {
    color: "#4f4f4f",
    fontWeight: 600,
    fontSize: 16,
    marginRight: 5,
    textDecoration: "none",
    textTransform: "none"
  },
  titleBlack3Txt: {
    color: '#000',
    fontSize: 14,
    marginTop: 15,
    marginLeft: 5,
    fontWeight: 500,
    [theme.breakpoints.down('sm')]: {
      fontSize: 13,
    },
  },
  titleBlack4Txt: {
    color: '#000',
    fontSize: 13,
    fontWeight: 300,
    [theme.breakpoints.down('sm')]: {
      fontSize: 13,
    },
  },
  titleBlack5Txt: {
    color: '#000',
    fontSize: 16,
    fontWeight: 500,
    marginTop: 10,
    [theme.breakpoints.down('sm')]: {
      fontSize: 13,
    },
  },
  titleBlackBoldTxt: {
    color: '#000',
    fontSize: 15,
    marginTop: 20,
    marginLeft: 5,
    fontWeight: 700,
    [theme.breakpoints.down('sm')]: {
      fontSize: 13,
    },
  },
  titleBlackBold2Txt: {
    color: '#000',
    fontSize: 13,
    fontWeight: 700,
    [theme.breakpoints.down('sm')]: {
      fontSize: 13,
    },
  },
  titleModalTxt: {
    color: '#555555',
    fontSize: 25,
    fontWeight: 600,
    textAlign: "center",
    [theme.breakpoints.down('md')]: {
      fontSize: 17,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 13,
    },
  },
  labelInputTxt: {
    color: '#000',
    fontSize: 16,
    fontWeight: 400,
    textAlign: "left",
    [theme.breakpoints.down('sm')]: {
      fontSize: 13,
    },
  },
  txtAction: {
    textTransform: 'none',
    color: '#fff',
    fontWeight: 200,
    fontSize: 15,
    [theme.breakpoints.down('md')]: {
      fontSize: 13,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 12,
    },
  },
  txtActionBlack: {
    textTransform: 'none',
    color: '#000',
    fontWeight: 200,
    fontSize: 15,
    [theme.breakpoints.down('md')]: {
      fontSize: 13,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 12,
    },
  },
  labelInput: {
    fontSize: 14
  },
  makeOrderBtn: {
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 20,
    paddingRight: 20,
    marginLeft: 10,
    backgroundColor: Colors.background,
    textTransform: "none",
    alignSelf: "center",
    borderRadius: 10,
    paddingBottom: 10
  },
  txtContentTable: {
    fontWeight:600,
    fontSize: 13,
    marginLeft:15,
    marginRight:15,
    [theme.breakpoints.down('md')]: {
      fontSize: 12,    
      marginLeft:10,
      marginRight:10,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 11,  
      marginLeft:5,
      marginRight:5,
    },
  },
  txtContentTable1: {
    fontWeight:600,
    color:"#a9a9a9",
    fontSize: 13,
    marginLeft:15,
    marginRight:15,
    [theme.breakpoints.down('md')]: {
      fontSize: 12,    
      marginLeft:10,
      marginRight:10,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 11,  
      marginLeft:5,
      marginRight:5,
    },
  },
  noTableTxt: {
    fontSize: 13,
    textAlign: "center"
  },
  titleTxt1: {
    fontSize: 17,
    marginLeft: 5,
    fontWeight: 300,
    color: '#fff',
    [theme.breakpoints.down('sm')]: {
      fontSize: 13,
    },
  },
  titleTxt2: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: 300,
    color: '#000',
    [theme.breakpoints.down('sm')]: {
      fontSize: 13,
    },
  },
  cardContainer: {
    marginBottom: 10,
    border: '2px solid #d9dddc',
    textAlign: 'left',
  },
  card2Container: {
    padding: 16
  },
  cardTotalPendapatanContainer: {
    paddingTop: 35,
    height: 150
  },
  cardChipTotalContainer: {
    padding: 16,
    height: 170
  },
  card3Container: {
    marginTop: 15,
    padding: 16
  },
  statusTxt: {
    textAlign: 'right',
    marginRight: 10,
    marginTop: 3,
    textTransform: 'none',
    fontSize: 15,
  },
  status2Txt: {
    textAlign: 'center',
    color: "#fff",
    textTransform: 'none',
    fontSize: 12,
  },
  cardContentTxt: {
    fontSize: 10,
    color: '#303030',
    textTransform: 'none',
    //fontWeight: 300,
    //testing responsive
    [theme.breakpoints.down('sm')]: {
      color: 'red',
    },
  },
  formTxt: {
    width: '100%',
    marginRight: '1%',
  },
  formTxt3: {
    width: '4%',
    marginTop: 16,
    marginRight: '1%',
  },
  formSelect: {
    width: '11%',
    marginRight: '1%',
  },
  formTxt2: {
    width: '100%',
    marginTop: 16,
    marginRight: '1%',
  },
  containerBtn: {
    width: '100%',
    marginTop: 10,
  },
  containerLoader: {
    width: '100%',
    marginBottom: 100,
  },
  loader: {
    color: "#fff"
  },

  loaderScreen: {
    textAlign: 'center',
    marginTop: 180,
    color: '#689cf2',
  },
  statusAnswer: {
    paddingTop: 4,
    backgroundColor: '#dbdbdb',
    borderRadius: 3,
  },
  toolbarTxt: {
    fontSize: 12,
    fontWeight: 0,
    textTransform: 'none',
    fontFamily: 'Montserrat',
    textAlign: 'center',
  },
  inputBtn: {
    backgroundColor: Colors.background,
    textTransform: 'none',
    flexDirection: "row",
    marginTop: 15,
    height: 36
  },
  fabLeft: {
    width: 40,
    height: 40,
    paddingLeft: 4,
    position: "absolute",
    top: 270,
    [theme.breakpoints.up("md")]: {
      left: 320,
    },
    [theme.breakpoints.down("md")]: {
      left: 350
    }
  },
  fabRight: {
    width: 40,
    height: 40,
    position: "absolute",
    top: 270,
    [theme.breakpoints.up("md")]: {
      right: 60
    },
    [theme.breakpoints.down("md")]: {
      right: 350
    }
  },
  btnSearch: {
    backgroundColor: Colors.background,
    color: "#fff",
    height: 38,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    marginTop: 15
  },
  multilineColor: {
    width: "100%",
    height: 37,
    backgroundColor: Colors.backgroundScreen,
    // borderTopRightRadius:0,
    // borderBottomRightRadius:0,
    color: '#000'
  },
  multilineColorWhite: {
    width: "100%",
    height: 37,
    backgroundColor: "#fff",
    color: '#000',
    [theme.breakpoints.down('md')]: {
      fontSize: 17,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 13,
    },
  },
  titlePrimaryTxt: {
    color: Colors.primary,
    fontSize: 20,
    fontWeight: 600,
    [theme.breakpoints.down('sm')]: {
        fontSize: 13,
    },
},
  multilineTextAreaWhite: {
    width: "100%",
    backgroundColor: "#fff",
    // borderTopRightRadius:0,
    // borderBottomRightRadius:0,
    color: '#000'
  },
  txtSearch: {
    width: "100%",
    backgroundColor: '#fff'
  },
  containerResponsive: {
    flex: 1,
    paddingBottom: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4)
    },
  },
  spacing: {
    marginLeft: 10,
    marginTop: 6
  },
  containerResponsive3: {
    flex: 1,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1)
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1)
    },
  },

  containerResponsive2: {
    flex: 1,
    paddingBottom: theme.spacing(1),
      paddingTop:theme.spacing(12),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4)
    },
  },
  multilineTxt: {
    fontSize: 12,
    width: 220
  },
  inputUpload: {
    display: 'none',
  },
  addressNameTxt:{
    fontSize:14,textAlign:"left",color:"#000",fontWeight:700,
      [theme.breakpoints.down('xs')]: {
        fontSize: 13,
        // fontStyle: "italic"
      },
  },
  addressNoteTxt:{
    fontSize:12,textAlign:"left",color:"#000",fontWeight:500,
      [theme.breakpoints.down('xs')]: {
        fontSize: 11,
        // fontStyle: "italic"
      },
  },
  btnUpload: {
    flexDirection: "column",
    width: 170,
    height: 170,
    border: "1px dashed #BDBDBD",
    borderRadius: 4,
    backgroundColor: '#F2F2F2',
    textTransform: 'none',
  },
  inputTxt: {
    width: "100%",
    height: 40,
    color: '#000'
  },
  formTxt: {
    width: "100%",
  },
  cancelBtn: {
    border: `2px solid ${Colors.background}`,
    textTransform: 'none',
    backgroundColor: "transparent",
    flexDirection: "row",
    marginTop: 15,
    paddingLeft: 20,
    paddingRight: 20,
    marginRight: 5,
    borderRadius: 10,
    width: 160,
    height: 36
  },
  submitBtn: {
    backgroundColor: Colors.background,
    textTransform: 'none',
    flexDirection: "row",
    marginTop: 15,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
    width: 160,
    height: 36
  },
  submitBtn2: {
    backgroundColor: "#737373",
    textTransform: 'none',
    flexDirection: "row",
    marginTop: 15,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
    height: 36
  },
  titleCardTotalTxt: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
    color: "#828282"
  },
  contentCardTotalCenterTxt: {
    textAlign: "center",
    fontWeight: 600,
    fontSize: 40
  },
  mapsCard:{
    flex:1,padding:0,
    marginBottom:20,
    width:"100%",
    [theme.breakpoints.up('md')]: {
        height:550
    },
    [theme.breakpoints.down('md')]: {
        height:500
    },
},
  contentCardTotalLeftTxt: {
    textAlign: "left",
    fontWeight: 600,
    fontSize: 40
  },
  logoMerchant:{
    width: 95, marginTop: 24, marginRight: 10,
    [theme.breakpoints.down('md')]: {
      fontSize: 25,
      marginTop: 15,
      width: 80,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 18,
      marginTop: 10,
      width: 50,
    },
  },
  contentCardTotalLeftBlackTxt: {
    textAlign: "left",
    fontWeight: 600,
    fontSize: 35
  },
  contentCardTotalLeftBlack1Txt: {
    fontSize: 35,
    marginTop:45,
    textAlign: "left",
    fontWeight: 600,
    [theme.breakpoints.down('xs')]: {
      fontSize: 18,
      marginTop:20,
    },
  },
  alamatMerchantTxt: {
    fontSize: 18,
    textAlign: "left",
    fontWeight: 600,
    [theme.breakpoints.down('xs')]: {
      fontSize: 17,
    },
  },
  contentCardTotalLeftGreenTxt: {
    textAlign: "left",
    fontWeight: 600,
    color: "#27AE60",
    fontSize: 35
  },
  contentCardTotalLeftRedTxt: {
    textAlign: "left",
    fontWeight: 600,
    color: "#EB5757",
    fontSize: 35
  },
  detailCardTotalTxt: {
    textAlign: "center",
    fontSize: 13,
    color: "#828282"
  },
  detailCard2Txt: {
    textAlign: "left",
    fontSize: 13,
    color: "#828282"
  },
  detailCard3Txt: {
    fontSize: 13,
    marginLeft: 10,
    marginTop: 20,
    color: "#000"
  },
  blackTxt: {
    fontSize: 12,
    textTransform: "none",
    color: "#000",
    fontWeight: 600
  },
  strikeThroughGrayRightTxt: {
    fontSize: 12,
    textTransform: "none",
    textDecoration: "line-through",
    color: "#BDBDBD",
    fontWeight: 600
  },
  strikeThroughGrayRight1Txt: {
    fontSize: 11,
    textTransform: "none",
    textDecoration: "line-through",
    color: "#BDBDBD",
    fontWeight: 600
  },
  grayTxt: {
    fontSize: 13,
    color: "#828282"
  },
  gray2Txt: {
    fontSize: 12,
    marginLeft: 11,
    color: "#8B8996",
    textTransform: "none",
    textAlign: "left"
  },
  grayT3xt: {
    fontSize: 14,
    color: "#BDBDBD"
  },
  // Tabs Panel
  root: {
    paddingBottom: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4)
    },
  },
  titleTabTxt: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5vh"
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "2vh"
    },
    textTransform: "unset"
  },
  top50px: {
    marginTop: 50
  },
  top45px: {
    marginTop: 45
  },
  top25px: {
    marginTop: 25
  },
  left10px: {
    marginLeft: 10
  },
  notActiveBtn: {
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 20,
    paddingRight: 20,
    marginLeft: 10,
    border: '2px solid #F15D2A',
    borderRadius: 10,
    textTransform: "none",
    backgroundColor: "transparent"
  },
  activeBtn: {
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 20,
    paddingRight: 20,
    marginLeft: 10,
    border: '2px solid #F15D2A',
    backgroundColor: "#F15D2A",
    textTransform: "none",
    borderRadius: 10,
  },
  orderPrimaryTxt: {
    color: Colors.primary,
    fontSize: 16,
  },
  orderSnowTxt: {
    color: Colors.snow,
    fontSize: 16,
  },
  containerCardMenu: {
    width: 200,
  },
  cardMenu: {
    padding: 0,
    width: "100%",
    height: 210,
    borderRadius: 10,
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.15)",
  },
  menuImg:{
    height:140,
    width:"100%",
    [theme.breakpoints.down('md')]: {
      height:140,
    },
    [theme.breakpoints.down('xs')]: {
      height:150,
    },
  },
  exportImg:{
    height:25,
    marginRight:7,
    [theme.breakpoints.down('xs')]: {
      height:20,
    },
  },
  searchMenuTxt:{
    width:400,
    [theme.breakpoints.down('md')]: {
      width:300,
    },
    [theme.breakpoints.down('xs')]: {
      width:"100%",
    },
  },
  containerPrice:{
    justifyContent:"space-between",
    paddingLeft: 10,
    paddingRight: 10
  }
}));
