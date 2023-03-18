import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import StargazerList from "./src/components/StargazerList";
import { apiService } from "./services/apiService";
import { OwnerRepoResponse, StargazersUser } from "./types/apiService";
import CardOwner from "./src/components/cardOwner";
import CustomTextInput from "./src/components/CustomTextInput";

export default function App() {
  const [username, setUsername] = useState<string>("");
  const [repo, setRepo] = useState<string>("");
  const [starredUsers, setStarredUsers] = useState<StargazersUser[]>([]);
  const [repoOwner, setRepoOwner] = useState<OwnerRepoResponse>();

  useEffect(() => {
    searchStargazerByRepo()
  }, []);

  const searchStargazerByRepo = (username?: string , repo?: string) => {
    apiService.getStargazer(username, repo).then((el) => {
      setStarredUsers(el);
    }).catch(e=>console.error(e));
    apiService.getUserProfile(username, repo).then((repository) => {
      console.log(repository);
      setRepoOwner(repository);
    }).catch(e=>console.error(e));
  };
  return (
    <View style={styles.container} >
        <Text style={{ fontSize: 24, color: "white" }}>
          Seach your favourite Repos
        </Text>
        <View style={styles.flexedContainer}>
          <CustomTextInput
            placeholder={"Type here to search the username"}
            value={username}
            onChange={setUsername}
          ></CustomTextInput>
          <CustomTextInput
            placeholder={"Type here to search the repo name"}
            value={repo}
            onChange={setRepo}
          ></CustomTextInput>
          <TouchableOpacity
            style={styles.button}
            onPress={()=>searchStargazerByRepo(username, repo)}
            disabled={username.length < 1 && repo.length < 1}
          >
            <Text style={styles.button.text}>Search Stargazer</Text>
          </TouchableOpacity>
        </View>
        <CardOwner
          owner={repoOwner?.owner}
          stars={starredUsers.length}
          repoName={repoOwner?.name}
        />
        <StargazerList users={starredUsers} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161B22",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  flexedContainer: {
    display: "flex",
    gap: 20,
    paddingVertical: 8,
    alignItems: "center",
  },
  middleText: {
    fontSize: 24,
  },
  button: {
    color: "#161B22",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 50,
    text: {
      color: "#161B22",
    },
  },
});
