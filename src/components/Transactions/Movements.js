import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function Movements({ data }) {
  const [showValue, setShowValue] = useState(false);
  const verifyBalance = data.type === 1 ? styles.value : styles.expenses;
  const verifyBalanceSymbol =
    data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}`;
  return (
    <TouchableOpacity style={styles.container} onPress={() => setShowValue(!showValue)}>
      <Text style={styles.date}>{data.date}</Text>
      <View style={styles.content}>
        <Text style={styles.label}>{data.label}</Text>
        {showValue ? (
          <Text style={verifyBalance}>{verifyBalanceSymbol}</Text>
        ) : (
          <View style={styles.skeleton} />
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 24,
    borderBottomWidth: 0.5,
    borderBottomColor: "#dadada",
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 2,
    marginBottom: 8,
  },
  date: {
    color: "#dadada",
    fontWeight: "bold",
  },
  expenses: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#e74e3c",
  },
  label: {
    fontWeight: "bold",
    fontSize: 16,
  },
  skeleton: {
    marginTop: 6,
    width: 80,
    height: 10,
    backgroundColor: "#dadada",
  },
  value: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#2ecc71",
  },
});
