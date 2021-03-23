import { makeStyles } from '@material-ui/styles';
import Colors from "Themes/Colors"

export default makeStyles((theme) => ({
    style:(style)=>({
        textTransform:"none",
        [theme.breakpoints.down('sm')]: {
            fontSize: style ? style.fontSize - 3 : 12,
        },
        ...style
    })
  
}));
