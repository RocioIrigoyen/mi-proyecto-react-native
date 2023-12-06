import {View, TextInput, Button, StyleSheet} from "react-native"

const AddProduct = ({newTitleProduct,setNewTitleProduct, newPriceProduct, setNewPriceProduct, handlerAddProduct}) => {

    return    <View style={styles.inputContainer}>
                    <TextInput 
                    style={styles.input}
                    placeholder='Nombre'
                    value={newTitleProduct}
                    onChangeText={(t)=> setNewTitleProduct(t)}
                    />

                    <TextInput 
                    style={styles.input}
                    placeholder='Precio'
                    value={newPriceProduct}
                    onChangeText={(t)=> setNewPriceProduct(t)}
                    
                    />
                    
                    <Button title="ADD" onPress= {handlerAddProduct}/>
            </View>


}

const styles = StyleSheet.create({
    input: {
      borderWidth: 4,
      paddingHorizontal:10,
      paddingVertical: 5,
      flex:1,
    },
    inputContainer: {
      flexDirection: "row",
      backgroundColor: 'white',
      alignSelf:"stretch",
      alignItems: "center",
      justifyContent: "space-around",
      margin: 10,
    }
  });

export default AddProduct