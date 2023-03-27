import { StyleSheet, Text, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
function Reminders() {
    return(
        <View style={styles.card}>
        <View style = {{flexDirection:"row"}}> 
        <View style={{margin:5}}>
           <Ionicons name="timer-outline" size={20}   color="black" />
        </View>

        <View >
          <Text style={{color:"gray"}}>Set Medication</Text>
          <Text style={styles.remindersStyle}>Reminders</Text>
        </View>

        </View>

      </View>
    );
};

export default Reminders;
const styles = StyleSheet.create({
    remindersStyle:{
        color:"gray"
    },
    card:{
        backgroundColor: 'white',
        padding:10,
        marginHorizontal: 8,
        borderRadius:20,
        marginBottom: 8,
        
        }
    });