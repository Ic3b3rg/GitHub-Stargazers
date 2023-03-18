import { FunctionComponent } from "react";
import {
  SafeAreaView,
  FlatList,
  Text,
  View,
  Image,
  StyleSheet,
} from "react-native";
import { OwnerRepoResponse, StargazersUser } from "../../types/apiService";

interface CardOwnerProps {
  owner: OwnerRepoResponse["owner"] | undefined;
  stars: number;
  repoName: string | undefined;
}

const CardOwner: FunctionComponent<CardOwnerProps> = ({ owner, stars, repoName }) => {
  if (!owner) {
    return (
      <View>
        <Text style={styles.notFoundText}>Owner Not found</Text>
      </View>
    );
  }
  return (
    <View style={{ marginVertical: 40, width: "100%" }}>
      <View style={styles.container}>
        <Image
          source={{ uri: owner.avatar_url as any }}
          style={{
            width: 50,
            height: 50,
            borderRadius: 50,
            position: "relative",
            bottom: "20%",
          }}
          resizeMode="contain"
        />
        <Text>{owner.login}</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            width:'100%',
            paddingVertical: 20,
          }}
        >
          <View style={{ display: "flex", flexDirection: "column" }}>
            <Text>Repository Name</Text>
            <Text style={{textAlign:'center'}}>{repoName}</Text>
          </View>
          <View style={{ display: "flex", flexDirection: "column" }}>
            <Text>Stars</Text>
            <Text style={{textAlign:'center'}}> {stars} ⭐</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    width: "auto",
    borderRadius: 20,
  },
  notFoundText: {
    color: "#FFF",
    fontSize: 24,
    padding: 8
  }
});

export default CardOwner;

