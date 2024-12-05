import { Text, View, Image, StyleSheet,Dimensions, useWindowDimensions, ScrollView } from "react-native";
import Title from "../components/title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/primarybutton";

function EndgameScreen({ roundsNumber, userNumber, onStartNewGame }) {
const {width,height}=useWindowDimensions();
let imagesize=300;
if(width<380){
  imagesize=150;
}
if (height<400){
  imagesize=80
}
const imageStyle={
  width:imagesize,
  height:imagesize,
  borderRadius:imagesize/2
}
  return (
    <ScrollView style={styles.scree}>
    <View style={ styles.rootCont}>
      <Title>GAME OVER</Title>
      <View style={[styles.imageContainer,imageStyle]}>
        <Image style={styles.image} source={require('../assets/success.png')} />
      </View>
      <Text style={styles.summary}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number{' '}
        <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
    </ScrollView>
  );
}

export default EndgameScreen;

//const imagedevice=Dimensions.get('window').width;

const styles = StyleSheet.create({
  imageContainer: {
    borderColor: Colors.primary800,
    borderRadius: 150,
    borderWidth: 3,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  rootCont: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  summary: {
    marginVertical: 24,
    fontSize: 20,
    textAlign: 'center',
  },
  highlight: {
    
    color: Colors.primary500,
  },
  scree:{
    flex:1
  }
});
