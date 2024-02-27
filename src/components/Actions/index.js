import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Actions() {
  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <TouchableOpacity style={styles.button}>
        <View style={styles.action}>
          <AntDesign name="addfolder" size={26} color="#000" />
        </View>
        <Text style={styles.label}>Entradas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <View style={styles.action}>
          <AntDesign name="tagso" size={26} color="#000" />
        </View>
        <Text style={styles.label}>Compras</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <View style={styles.action}>
          <AntDesign name="creditcard" size={26} color="#000" />
        </View>
        <Text style={styles.label}>Carteira</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <View style={styles.action}>
          <AntDesign name="barcode" size={26} color="#000" />
        </View>
        <Text style={styles.label}>Boletos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <View style={styles.action}>
          <AntDesign name="setting" size={26} color="#000" />
        </View>
        <Text style={styles.label}>Conta</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  action: {
    backgroundColor: "#ecf0f1",
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 32,
  },
  label: {
    marginTop: 4,
    textAlign: "center",
    fontWeight: "bold",
  },
  container: {
    maxHeight: 84,
    marginBottom: 14,
    marginTop: 18,
    paddingEnd: 14,
    paddingStart: 14,
  },
});
