import { Text,StyleSheet,Platform  } from "react-native"

import Colors from "../constants/colors";
function Title({children}){
    return <Text style={styles.title}>{children}</Text>;
}
export default Title;
const styles=StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:'bold',
        color:Colors.primary800,
        textAlign:'center',
        marginTop:100,
        borderWidth:Platform.select({ios:2,android:0}),
        borderColor:Colors.primary800,
        padding:8,
        maxWidth:'80%',width:300

    }
})