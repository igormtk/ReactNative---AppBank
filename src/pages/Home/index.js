import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Transactions from "../../components/Transactions";
import Actions from "../../components/Actions";

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Julia Paganini" />
      <Balance balance={"1.534.02,51"} expenses={"-254.123,42"} />
      <Actions />
      <Text style={styles.subtitle}>Últimas movimentações</Text>
      <Transactions />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 14,
  },
});
