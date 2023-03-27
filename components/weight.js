import { StyleSheet, Text, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
function Weight() {
  return (
  <View style={styles.card}>
  <View style={{flexDirection:"row"}}>
    {/* <View style={{margin:5}}>
       <Ionicons name="fast-food" size={20} color="black" />
    </View> */}
    <View style={{margin:4}}>
       <Text >Weight</Text>
    </View>
  </View> 
  </View> );
};

export default Weight;

const styles = StyleSheet.create({
    foodStyle:{
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