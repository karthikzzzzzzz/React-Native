import { StyleSheet,View,Text } from "react-native";
function Instruction({children,style}){
    return <Text style={[styles.instruction,style]}>{children}</Text>
}
export default Instruction;
const styles=StyleSheet.create({
    instruction:{
        fontSize:24,
        color:'white'

    },

})