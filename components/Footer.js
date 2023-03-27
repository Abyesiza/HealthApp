import { StyleSheet, Text, View } from "react-native";
function Footer() {
    return (
        <View style={styles.card}>
        <View >
            
         <Text style={styles.footerStyle}>Footer</Text>
        </View> 
        </View> );   
};

export default Footer;
const styles = StyleSheet.create({
    footerStyle:{
        color:"#cccccc"
    },
    card:{
        backgroundColor: 'white',
        }
    });