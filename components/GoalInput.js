import { useState } from "react";
import { Button, Image, Modal, StyleSheet, TextInput, View } from "react-native";

export default function GoalInput({ addGoalHandler, visible, onCancel }) {
  const [enteredGoalText, setEnteredGoalText] = useState('')

  function goalInputHandler(enteredText) {

    setEnteredGoalText(enteredText)
  }

  return <Modal visible={visible} animationType="slide">
    <View style={styles.inputContainer}>
      <Image style={styles.image} source={require("../assets/images/goal.png")}/>
      <TextInput value={enteredGoalText} style={styles.textInput} placeholder="Your course goal!" onChangeText={goalInputHandler} />
      <View style={styles.buttonsContainer}>
        <View style={styles.button}>
          <Button title="Cancel" color="#f31282" onPress={onCancel} />
        </View>
        <View style={styles.button}>
          <Button title="Add Goal" color="#5e0ecc" onPress={() => {
            addGoalHandler(enteredGoalText)
            setEnteredGoalText('')
          }} />
        </View>
      </View>
    </View>
  </Modal>;
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    gap: 8,
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b'
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: "100%",
    padding: 8,
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 16
  },
  button: {
    width: 100,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  }
})