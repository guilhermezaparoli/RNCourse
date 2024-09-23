
import { useState } from "react";
import { FlatList, StyleSheet, View } from 'react-native';
import GoItem from "./components/GoItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])

  function addGoalHandler(value) {
    setCourseGoals((prev) => [...prev, { text: value, id: Math.random().toString() }])
    console.log(value)
  }
  function deleteGoalHandler(id){
setCourseGoals((prev) => {
  return prev.filter((goal) => goal.id !== id)
})
  }
  return (
    <View style={styles.appContainer} >
      <GoalInput addGoalHandler={addGoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} alwaysBounceVertical={false} keyExtractor={(item, index) => {
          return item.id
        }} renderItem={itemData => {
          return <GoItem text={itemData.item.text} onDeleteItem={deleteGoalHandler} id={itemData.item.id}/>
        }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1
  },

  goalsContainer: {
    flex: 5
  },
 
});
