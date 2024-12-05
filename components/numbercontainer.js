import { View,Text,StyleSheet,Dimensions } from "react-native";
import Colors from "../constants/colors";
function Numbercontainer({children}){
    return(
        <View style={styles.container}>
            <Text style={styles.numbertext}>{children}</Text>
        </View>
    )
   
}

export default Numbercontainer;

const devicewidth=Dimensions.get('window').width

const styles=StyleSheet.create({
    container:{
        borderWidth:4,
        borderColor:Colors.primary800,
        padding:devicewidth<380?12:24,
        borderRadius:8,
        margin:24,
        alignItems:'center',
        justifyContent:'center'

    },
    numbertext:{
        color:Colors.primary800

    }

})