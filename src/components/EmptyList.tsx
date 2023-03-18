import { View, Text, StyleSheet } from "react-native";

const EmptyList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.notDataText}>I could not find any results😣</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { alignItems: "center", justifyContent: "center", height: 40 },
  notDataText: {
    fontSize: 20,
    padding: 8,
  },
});
export default EmptyList;
