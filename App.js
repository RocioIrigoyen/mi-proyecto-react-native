import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View, Modal} from 'react-native';
import uuid from 'react-native-uuid';

export default function App() {

  const [newTitleProduct, setNewTitleProduct] = useState("")
  const [newPriceProduct, setNewPriceProduct] = useState("")
  const [products, setProducts] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  
  const handlerAddProduct = () => {
    const newProduct =  {
      id: uuid.v4(),
      title: newTitleProduct,
      price: newPriceProduct,
    }
    setProducts(current => [...current, newProduct])
    setNewTitleProduct("")
    setNewPriceProduct("")
    console.log(products)
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
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

      <View style={styles.listContainer}>
       <FlatList
       data={products}
       keyExtractor={item => item.id}
       renderItem={ ({item})=> <View style={styles.cardProduct}>
                                <Text>{item.title}</Text>
                                <Text>{item.price}$</Text>
                                <Button title="DEL" onPress={()=>{setModalVisible(true)}}/>
                              </View>}
       />


      </View>

      <Modal
      visible={modalVisible}
      >
        <View>
          <Text> ¿Está seguro de que quiere eliminar el producto? </Text>
          <Button title="Cerrar" onPress={()=>{setModalVisible(false)}}/>
          <Button title="Borrar"/>
        </View>
      </Modal>

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
    alignItems: "center",
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
