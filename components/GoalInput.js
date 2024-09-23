import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export default function GoalInput({addGoalHandler}) {
  const [enteredGoalText, setEnteredGoalText] = useState('')

  function goalInputHandler(enteredText) {

    setEnteredGoalText(enteredText)
  }

  return <View style={styles.inputContainer}>
  <TextInput value={enteredGoalText} style={styles.textInput} placeholder="Your course goal!" onChangeText={goalInputHandler} />
  <Button title="Add Goal" onPress={() => {
    addGoalHandler(enteredGoalText)
    setEnteredGoalText('')
  }} />
</View>;
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 8,
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
      },
      textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "70%",
        padding: 8
      },
})