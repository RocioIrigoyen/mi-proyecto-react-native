import {View, Text, Button, StyleSheet} from "react-native"

const ListaItem = ({item, handlerModal}) => {
    return <View style={styles.cardProduct}>
                <Button title="❤️" color="white"/>
                <Text>{item.title}</Text>
                <Text>{item.price}$</Text>
                <Button title="DEL" onPress={()=>handlerModal(item)}/>
           </View>

} 

const styles = StyleSheet.create({
    cardProduct: {
      backgroundColor:"grey",
      flexDirection: "row",
      padding: 10,
      margin: 10,
      justifyContent:"space-between",
      alignItems:"center",
      borderWidth:4,
    },
  });


export default ListaItem