import React, {  useState } from 'react';
import { StyleSheet ,View, TextInput, Button } from 'react-native';

const GoalInput = props => {
    const [entredGoal, setEntredGoal] = useState('');

    const goalInputHandler = (text) => {
        setEntredGoal(text);
    };

    return (
        <View style={styles.inputsContainer}>
            <TextInput
                placeholder="Enter your goal"
                style={styles.inputField}
                onChangeText={goalInputHandler}
                value={entredGoal}
            />
            <Button title="Add" onPress={props.clickHandler.bind(this, entredGoal)}/>
        </View>
    );
    
}
const styles = StyleSheet.create({
    inputsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
      inputField: {
        width: "80%",
        padding: 10,
        borderWidth: 1,
        borderColor: "black"
    }
});
export default GoalInput;