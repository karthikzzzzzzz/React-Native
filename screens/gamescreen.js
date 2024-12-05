import { Alert, Text, View, useWindowDimensions} from "react-native";
import { StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import Title from "../components/title";
import PrimaryButton from "../components/primarybutton";
import NumberContainer from "../components/numbercontainer";
import Card from "../components/card";
import Instruction from "../components/instruction";
import { Ionicons } from "@expo/vector-icons";

function generateRandom(min, max, exclude) {
    const randNum = Math.floor(Math.random() * (max - min)) + min;
    
    if (randNum === exclude) {
        return generateRandom(min, max, exclude);
    } else {
        return randNum;
    }
}

function GameScreen({ userNumber, onGameOver }) {
    const initialGuess = generateRandom(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [rounds, setRounds] = useState(0);
    const{width,height}=useWindowDimensions();

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(rounds);
        }
    }, [currentGuess, userNumber, onGameOver, rounds]);

    useEffect(() => {
        
        minBound = 1;
        maxBound = 100;
    }, []);

    function nextGuessHandler(direction) {
        if (
            (direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'greater' && currentGuess > userNumber)
        ) {
            Alert.alert("Don't lie!", 'You know that this is wrong...', [
                { text: 'Sorry!', style: 'cancel' },
            ]);
            return;
        }
        if (direction === 'lower') {
            maxBound = currentGuess;
        } else {
            minBound = currentGuess + 1;
        }
        const newRndNumber = generateRandom(minBound, maxBound, currentGuess);
        setCurrentGuess(newRndNumber);
        setRounds(prevRounds => prevRounds + 1);
    }
    let content=<>
    <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <Instruction style={styles.ins}>Higher or lower?</Instruction>
                <View style={styles.buttonof}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                            <Ionicons name="remove-outline" size={24} />
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                            <Ionicons name="add-outline" size={24} />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
    </>
    if (width>500){
        content=<>
        <Instruction style={styles.ins}>Higher or lower?</Instruction>
        <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                            <Ionicons name="remove-outline" size={24} />
                        </PrimaryButton>
                    </View>
                    <NumberContainer>{currentGuess}</NumberContainer>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                            <Ionicons name="add-outline" size={24} />
                        </PrimaryButton>
                    </View>
                </View>
        </>

    }

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            {content}
        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        alignItems:'center'
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    },
    ins: {
        marginBottom: 12,
    },
    buttonof:{
        flexDirection:'row',
        alignItems:'center'

    }
});
