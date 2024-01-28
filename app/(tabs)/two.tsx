import { Ionicons } from "@expo/vector-icons";
import {
  FlatList,
  Image,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import useCartStore from "@/store/cartStore";
import { Product } from "@/store/interfaces";

export default function TabTwoScreen() {
  const { reduceProduct, addProduct, products } = useCartStore();

  const renderItem: ListRenderItem<Product & { quantity: number }> = ({
    item,
  }) => (
    <View style={styles.cartItemContainer}>
      <Image style={styles.cartItemImage} source={{ uri: item.image }} />
      <View style={styles.itemContainer}>
        <Text style={styles.cartItemName}>{item.title}</Text>
        <Text>Price: ${item.price}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={{ padding: 10 }}
          onPress={() => reduceProduct(item)}
        >
          <Ionicons name="remove" size={20} color="#000" />
        </TouchableOpacity>

        <Text>{item.quantity}</Text>
        <TouchableOpacity
          style={{ padding: 10 }}
          onPress={() => addProduct(item)}
        >
          <Ionicons name="add" size={20} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList data={products} renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  cartItemContainer: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },

  cartItemImage: {
    width: 50,
    height: 50,
  },
  itemContainer: {
    flex: 1,
  },
  cartItemName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
