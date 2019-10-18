import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, ScrollView, Alert } from "react-native";
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [goalList, setGoalList] = useState([]);

  const goalClickHandler = (goalTitle) => {
    setGoalList( prevList => [goalTitle, ...prevList]);
  };

  const deletGoalHandler = goalTitle => {
    Alert.alert(
      'Alert Title',
      'Do you realy want to delete this item',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            console.log('OK Pressed');
            setGoalList(prevList => prevList.filter(goal=>goal !== goalTitle));
          },
          style: 'destructive'
        },
      ],
      {cancelable: false},
    );
    
  }
  return (
    <View style={styles.root}>
      <GoalInput clickHandler={goalClickHandler} />
      <ScrollView>
        {goalList.map((goal,index) => <GoalItem key={index} text={goal} onDelete={deletGoalHandler.bind(this, goal)}/>)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 55
  },
});
