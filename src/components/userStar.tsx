import { FunctionComponent } from "react";
import { StargazersUser } from "../../types/apiService";
import { Text, Image, StyleSheet, View, StyleProp } from "react-native";
interface UserStarProps {
  username: StargazersUser["login"];
  imageUri: StargazersUser["avatar_url"];
}

const UserStar: FunctionComponent<UserStarProps> = ({ username, imageUri }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: imageUri as any }}
        style={styles.imageStyle}
        resizeMode="cover"
      />
      <Text style={styles.userText}>{username}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
    padding: 16,
  },
  imageStyle: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  userText: {
    fontSize: 24,
  },
});
export default UserStar;
