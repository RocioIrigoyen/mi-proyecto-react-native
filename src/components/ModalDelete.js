import {Modal, View, Text, Button, StyleSheet} from "react-native"

const ModalDelete = ({productSelected,setModalVisible,handlerDeleteProduct,modalVisible, handlerModal}) => {
    return   <Modal
                visible={modalVisible}
             >
                <View style= {styles.modalContainer}>
                     <View style= {styles.modalContent}>
                        <Text style= {styles.textModal}> ¿Está seguro de que quiere eliminar el producto? </Text>
                        <Text style= {styles.textModal}>{productSelected.title}</Text>
                        <Button title="Cerrar" onPress={()=>{setModalVisible(false)}}/>
                        <Button title="Borrar" onPress={handlerDeleteProduct}/>
                     </View>
                </View>
            </Modal>
}
const styles = StyleSheet.create({
    modalContent: {
      width: "80%",
      borderWidth: 2,
      padding: 10,
      gap: 10,
  
    },
    textModal: {
      textAlign: "center"
    },
    modalContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent:"center"
  
    },
  });

export default ModalDelete