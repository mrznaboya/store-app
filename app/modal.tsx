import { Button, StyleSheet } from "react-native";
import { useMMKVString } from "react-native-mmkv";

import { Text, View } from "@/components/Themed";
import { storage } from "@/store/mmkv";

export default function ModalScreen() {
  const [name, setName] = useMMKVString("user.displayname", storage);

  const updateName = () => {
    storage.set("user.displayname", "Test");
  };
  return (
    <View style={styles.container}>
      <Text>Welcome to the App: {name}</Text>
      <Button onPress={updateName} title="Update" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
