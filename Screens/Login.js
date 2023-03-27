import { StyleSheet, View, TextInput, Button} from "react-native";

export default function Login({navigation}) {
   return (
   <View style={styles.card}>



 
      <TextInput style={styles.textInput} placeholder='User name'/>
      <TextInput style={styles.textInput} placeholder='Password'/>
      <Button title='login' color={"#cccccc"}
           onPress={()=> navigation.navigate("Home", {language : "English"})}
           />

   </View>
   );
};



const styles = StyleSheet.create({
glucoseStyle:{
    color:"#cccccc"
},
textInput :{
    borderRadius:8,
    borderWidth : 1,
    borderColor: "#cccccc",
    width:"70%",
    padding: 4,
    marginBottom: 15
  },
card:{
    backgroundColor: 'white',
    padding:10,
    borderRadius:20,
    alignItems:"center",
    justifyContent:"center",
    marginHorizontal: 8,
    marginBottom:8,
    flex:3}
});