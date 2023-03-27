import { StyleSheet, Text, View, Dimensions } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

function Graph() {
    return (
    <View>
     <View style={{alignItems:"center"}}>
  <Text> Line Chart</Text>
  <LineChart
    data={{
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={300} // from react-native
    height={220}
    yAxisLabel="$"
    yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#cccccc",
      backgroundGradientFrom: "gray",
      backgroundGradientTo: "#cccccc",
      decimalPlaces: 1, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "2",
        strokeWidth: "1",
        stroke: "green"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
</View>


     <View style={styles.card} >
    <View >
    <Ionicons name="body"  color="black" />
     <Text style={styles.exerciseStyle}>Exercise</Text>
    </View>
    </View>

  </View>);


};

export default Graph;

const styles = StyleSheet.create({
    exerciseStyle:{
        color:"#cccccc"
    },
    card:{
        backgroundColor: 'white',
        padding:10,
        borderRadius:20,
        marginHorizontal: 8,
        marginBottom: 8,
        
        }
    });