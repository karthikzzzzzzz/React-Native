import Colors from "../constants/colors";
import { StyleSheet,View } from "react-native";
function Card({children}){
    return<View style={styles.card}>
        {children}
    </View>
}
export default Card;
const styles=StyleSheet.create({
    card:{
        marginHorizontal:24,
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center',
        elevation:4,
        shadowColor:'black',
        shadowOffset:{width:0,height:2},
        shadowRadius:6,
        shadowOpacity:0.5,
        padding:16,
        marginTop:36,
        backgroundColor:Colors.primary500
    }
})
