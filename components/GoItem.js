import { Pressable, StyleSheet, Text, View } from "react-native"

export default function GoItem({ text, onDeleteItem, id }) {
   return <View style={styles.goalItem} >
             <Pressable  android_ripple={{color: "#dddddd"}} onPress={onDeleteItem.bind(this, id)}>
            <Text style={styles.goalText} >{text}</Text>
    </Pressable>
        </View>
}


const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
    },
    goalText: {
        color: "white",
        padding: 6,

    }
})

