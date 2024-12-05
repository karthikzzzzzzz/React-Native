import { View ,Text,Pressable,StyleSheet} from "react-native";


function PrimartButton({children, onPress}){
    function presshandler(){
        onPress();
    }
    return(
        <View style={styles.buttonoutercontainer}>
        <Pressable style={({pressed})=> pressed? [styles.container,styles.pressed] :styles.container} onPress={onPress} android_ripple={{color:'black'}}>
            <Text style={styles.buttontext}>{children}</Text>
    
        </Pressable>
        </View>
    )

}
const styles=StyleSheet.create({
    container:{
        backgroundColor:"red",
        paddingVertical:8,
        paddingHorizontal:16,
        elevation:2,
    
    },
    buttontext:{
        color:'white',
        textAlign:'center'
    },
    buttonoutercontainer:{
        borderRadius:50,
        margin:4,
        oveflow:'hidden'
    },
    pressed:{
        opacity:0.75
    }
})

export default PrimartButton;