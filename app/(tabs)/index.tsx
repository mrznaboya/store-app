import { FlatList, Image, StyleSheet } from "react-native";

import data from "@/assets/data.json";
import { View } from "@/components/Themed";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Image style={styles.cartItemImage} source={{ uri: item.image }} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  cartItemImage: {
    width: 50,
    height: 50,
  },
});
