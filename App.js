import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {StyleSheet, View} from 'react-native';
import uuid from 'react-native-uuid';
import ModalDelete from './src/components/ModalDelete';
import AddProduct from './src/components/AddProduct';
import Lista from './src/components/Lista';

export default function App() {

  const [newTitleProduct, setNewTitleProduct] = useState("")
  const [newPriceProduct, setNewPriceProduct] = useState("")
  const [products, setProducts] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [productSelected, setProductSelected] = useState({})
  
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

  const handlerModal = (item) => {
    setProductSelected(item)
    setModalVisible(true)
    console.log(productSelected)

  }

  const handlerDeleteProduct = () => {

    setProducts(current => current.filter(product => product.id !== productSelected.id))
    setModalVisible(false)

  }

  return (
    <View style={styles.container}>

      <AddProduct
      newTitleProduct={newTitleProduct}
      setNewTitleProduct={setNewTitleProduct}
      newPriceProduct={newPriceProduct}
      setNewPriceProduct={setNewPriceProduct}
      handlerAddProduct={handlerAddProduct}

      />

      <Lista
      products={products}
      handlerModal={handlerModal}
      />

      <ModalDelete
      productSelected={productSelected}
      handlerDeleteProduct={handlerDeleteProduct}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      handlerModal={handlerModal}
      />

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
});
