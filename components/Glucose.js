import { StyleSheet, Text, View, TextInput, Pressable} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';


function GlucoseLevels({navigation}) {

   return (
   <View style={styles.card}>
     <View style={{flexDirection:"row", margin:5}}>
      <View style={{paddingRight:20}}>
        <Ionicons name="heart" size={20}  color="black" />
      </View>

      <Text style={styles.glucoseStyle}>Track Glucose levels</Text>
     </View>
{/* 
   <View style={{flexDirection:"row", justifyContent: "space-between", margin:5}}>
      <TextInput style={styles.textInput} placeholder='Current level'/>
      <Pressable style={{backgroundColor:"#cccccc",padding:1,alignItems:"center",
      justifyContent:"center", borderRadius:6}} onPress={()=> navigation.navigate("Login", {language : "English"})}
      >
        <Text>SUBMIT</Text>
      </Pressable> 

   </View>   */}





   </View>
   );
};

export default GlucoseLevels;

const styles = StyleSheet.create({
glucoseStyle:{
    color:"gray"
},
textInput :{
    borderRadius:8,
    borderWidth : 1,
    borderColor: "#cccccc",
    width:"70%",
    padding: 4
  },
card:{
    backgroundColor: 'white',
    padding:10,
    borderRadius:20,
    marginHorizontal: 8,
    marginBottom:8,
    
    }
});