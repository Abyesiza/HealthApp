
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View} from 'react-native';
import GlucoseLevels from '../components/Glucose';
import Exercise from '../components/Exercise';
import Food from '../components/Food';
import Reminders from '../components/Reminder';
import Weight from '../components/weight';

export default function Home() {
  return (
    <View style={  styles.container }>

      <View style={styles.headerjStyles }>
        <View style={styles.card}>
          <View >
          <Text >SMARTHEALTH</Text>
           <Text >TECH</Text>
           

          </View>
          
        </View>
      </View>

      <View style={styles.functionalityStyles }>
       <ScrollView  >
       
        <GlucoseLevels />
        <Exercise />
        <Food  />
        <Reminders  />
        <Weight />

       </ScrollView>
      </View>

     

     
      <StatusBar style="auto" />
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
