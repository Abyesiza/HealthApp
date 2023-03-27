
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View} from 'react-native';

import Graph from './graph';







export default function Home() {
  return (
    <View style={  styles.container }>

        <Graph/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop:50,

  },

  headerjStyles:{
    flex:2
  },
  functionalityStyles:{
   flex:5
   
  },


  card:{
    alignItems:"center",
    justifyContent:"center",
    flex:1
    
  }
});
