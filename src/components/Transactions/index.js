import { FlatList, StyleSheet, Text, View } from "react-native";
import { Movements } from "./Movements";

const list = [
  {
    id: 1,
    label: "Conta de luz",
    value: 135.12,
    date: "17/09/2023",
    type: 0, // despesa
  },
  {
    id: 2,
    label: "Igor Eiiji",
    value: 135.12,
    date: "16/09/2023",
    type: 1, // entrada
  },
  {
    id: 3,
    label: "IFood",
    value: 45.9,
    date: "15/09/2023",
    type: 0, // entrada
  },
];

export default function Transactions() {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  },
});
