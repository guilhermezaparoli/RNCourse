
import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from 'react-native';
import GoItem from "./components/GoItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [courseGoals, setCourseGoals] = useState([])
  function addGoalHandler(value) {
    setCourseGoals((prev) => [...prev, { text: value, id: Math.random().toString() }])
    endAddGoalHandler()
  }
  function deleteGoalHandler(id) {
    setCourseGoals((prev) => {
      return prev.filter((goal) => goal.id !== id)
    })
  }

  function startAddGoalHandler() {
    setModalIsVisible(true)
  }

  function endAddGoalHandler() {
    setModalIsVisible(false)
  }
  return (
    <>
    <StatusBar style="light"/>
    <View style={styles.appContainer} >
      <Button title="Add New Goal" color="#5e0acc" onPress={startAddGoalHandler} />
      <GoalInput addGoalHandler={addGoalHandler} visible={modalIsVisible} onCancel={endAddGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} alwaysBounceVertical={false} keyExtractor={(item, index) => {
          return item.id
        }} renderItem={itemData => {
          return <GoItem text={itemData.item.text} onDeleteItem={deleteGoalHandler} id={itemData.item.id} />
        }} />
      </View>
    </View>
    </>

  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },

  goalsContainer: {
    flex: 5
  },

});
