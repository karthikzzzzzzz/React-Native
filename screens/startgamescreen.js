import { Alert, TextInput,KeyboardAvoidingView, View, Text,useWindowDimensions, ScrollView } from "react-native";
import PrimartButton from "../components/primarybutton";
import { StyleSheet } from "react-native";
import { useState } from "react";
import Colors from "../constants/colors";
import Title from "../components/title";
import Card from "../components/card";
import Instruction from "../components/instruction";

function Startgamescreen({onPickNumber }){
    const[entertexted,setentertext]=useState('');
    const{width,height}=useWindowDimensions();
    function numberinputhandler(entered){
        setentertext(entered);

    }
    function resetinouthandler(){
        setentertext('');
    }
    function confirminputhandler(){
        const chosennumber=parseInt(entertexted);
        if (isNaN(chosennumber)|| chosennumber<=0 ||chosennumber>99){
            Alert.alert('Invalid no','number shud be bw 1 andd 99',[{text:'oKAY',style:'destructive',onPress:resetinouthandler}])
            return;

        }
        onPickNumber(chosennumber);


    }
    const marginTopdis=height<500?5:100;

 

    return(
        <ScrollView style={styles.screen}>
        <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootcontainer,{marginTop:marginTopdis}]}>
            <Title >Guesss the number!!</Title>
            <Card>

            <Instruction>
                Enter a Number
            </Instruction>
            <TextInput style={styles.inputtext} maxLength={2} keyboardType="number-pad"
            autoCapitalize="none" value={entertexted} onChangeText={numberinputhandler}
            />
            <View style={styles.buttoncont}>
                <View style={styles.buttoncontainer}>
            <PrimartButton onPress={resetinouthandler}>Reset</PrimartButton>
            </View>
            <View style={styles.buttoncontainer}>
            <PrimartButton onPress={confirminputhandler} >Confirm</PrimartButton>
            </View>
            </View>
            </Card>
        </View>
        </KeyboardAvoidingView>
        </ScrollView>
 
    );

}

//const devicewidth=Dimensions.get('window').height;
const styles=StyleSheet.create({
    rootcontainer:{
        flex:1,
        //margintop:devicewidth<380?30:100,
        alignItems:'center'
    },
    screen:{
        flex:1
    },
      
    inputtext:{
        height:50,
        fontSize:32,
        borderBottomColor:Colors.primary800,
        borderBottomWidth:2,
        color:Colors.primary800,
        marginVertical:8,
        width:50,
        fontWeight:'bold',
        textAlign:'center'

    }, 
    buttoncont:{
        flexDirection:'row', 
    
    },
    buttoncontainer:{
        flex:1
    },
   
   


})

export default Startgamescreen;