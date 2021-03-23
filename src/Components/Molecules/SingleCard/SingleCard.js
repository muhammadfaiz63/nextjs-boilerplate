import React from 'react';
import appInfo from 'AppInfo'
import { Images,Colors } from "Themes"

export default ({children}) => {
  return (
    <div style={{flex:1,backgroundColor:Colors.background,height:window.innerHeight}}>
    <div>
      <center>
        <img src={Images.hoodaMerchantlogo} alt="img" style={{alignSelf:"center",width:100,marginTop:30,height:120,color:"#fff"}}/>
        <div style={{fontSize:30,fontWeight:600,color:"#fff",marginBottom:20}}>Merchant Login</div>
      </center>
    </div>
    
    <div style={{display:"flex",flex:1,flexDirection:"column",alignItems:"center"}}>
      {children}
      <small style={{textAlign:"center",color:Colors.snow,marginTop:window.innerHeight / 10}}>Copyright {appInfo.title} © {new Date().getFullYear()} Inc.</small>
    </div>
  </div>
  ) 
}
