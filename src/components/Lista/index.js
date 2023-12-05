import {View, FlatList, StyleSheet} from "react-native"
import ListaItem from "./ListaItem";

const Lista = ({products, handlerModal}) => {
    return  <View style={styles.listContainer}>
                <FlatList
                data={products}
                keyExtractor={item => item.id}
                renderItem={ ({item})=> <ListaItem
                                          item= {item}
                                          handlerModal={handlerModal}/>}
                />


            </View>
}

const styles = StyleSheet.create({
    listContainer: {
      width:"100%"
  
    }
  });

export default Lista