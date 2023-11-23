import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
        style={styles.input}
        placeholder='Producto'/>
        <Button title="ADD"/>
      </View>

      <View style={styles.listContainer}>
        <View style={styles.cardProduct}>
          <Text>Coca cola</Text>
          <Text>2200$</Text>
          <Button title="DEL"/>
        </View>
        <View style={styles.cardProduct}>
          <Text>Sprite</Text>
          <Text>1800$</Text>
          <Button title="DEL"/>
        </View>
        <View style={styles.cardProduct}>
          <Text>Fanta</Text>
          <Text>600$</Text>
          <Button title="DEL"/>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'start',
    marginTop: 30,
  },
  text: {
    color:"white",
  },
  input: {
    borderWidth: 4,
    paddingHorizontal:10,
    paddingVertical: 5,
    flex:1,
  },
  inputContainer: {
    flexDirection: "row",
    alignSelf:"stretch",
   /*  width: 200, */
    justifyContent: "space-around",
    margin: 10,
  },
  listContainer: {
    width:"100%"

  },
  cardProduct: {
    backgroundColor:"grey",
    flexDirection: "row",
    padding: 10,
    margin: 10,
    justifyContent:"space-around",
    alignItems:"center",
    borderWidth:4,
  }
});
