import { StyleSheet, Text, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
function Exercise() {
    return (
    <View style={styles.card} >
        <View style={{margin:5, flexDirection:"row"}}>
           <Text style={{width:"60%"}}>Exercise</Text>
           <Text>Recent Workouts</Text>
        </View>

      <View style={{flexDirection:"row",margin:5, justifyContent:"space-between",  backgroundColor: '#F5F5F5', padding:5, borderRadius:10}}>
        <View style={{paddingHorizontal:50, borderRightWidth:1}}>
          <Ionicons name="body" size={20} color="black" />
        </View>
        <View style={{paddingHorizontal:40, borderRightWidth:1}}>
          <Ionicons name="walk-outline" size={20} color="black" /> 
        </View>
        <View style={{paddingHorizontal:40}}>
           <Ionicons name="bicycle-outline" size={20} color="black" />
        </View>
    </View>

  </View>);
};

export default Exercise;

const styles = StyleSheet.create({
    exerciseStyle:{
        color:"gray"
    },
    card:{
        backgroundColor: 'white',
        padding:10,
        borderRadius:20,
        marginHorizontal: 8,
        marginBottom: 8,
        
        }
    });