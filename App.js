import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, SafeAreaView, View } from 'react-native';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';


import StartGameScreen from './screens/startgamescreen';
import GameScreen from './screens/gamescreen';
import EndGameScreen from './screens/endgamescreen';
import Colors from './constants/colors';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [rounds, setRounds] = useState(0);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
    setRounds(0);  
  }

  function gameOverHandler(numRounds) {
    setGameIsOver(true);
    setRounds(numRounds);  
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setRounds(0);
    setGameIsOver(false);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber && !gameIsOver) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;
  }

  if (gameIsOver && userNumber) {
    screen = <EndGameScreen roundsNumber={rounds} userNumber={userNumber} onStartNewGame={startNewGameHandler} />;
  }

  return (
    <>
    <StatusBar style="dark"/>
    <LinearGradient colors={['#3b021f', Colors.primary800]} style={styles.container}>
      <ImageBackground 
        source={require('./assets/background.png')} 
        resizeMode="cover" 
        style={styles.container}
        imageStyle={styles.backgroundImage}
      >
        <StatusBar style="auto" />
        <SafeAreaView style={styles.container}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
