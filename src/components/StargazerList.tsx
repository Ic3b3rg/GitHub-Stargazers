import { FunctionComponent } from "react";
import { StyleSheet, FlatList, Text } from "react-native";
import { StargazersUser } from "../../types/apiService";
import EmptyList from "./EmptyList";
import SeparatorList from "./separatorList";
import UserStar from "./userStar";

interface StargazerListProps {
  users: StargazersUser[];
}

const StargazerList: FunctionComponent<StargazerListProps> = ({users}) => {


  return (
      <FlatList
        nestedScrollEnabled 
        data={users}
        style={{backgroundColor:'#fff', borderRadius: 20, width: '100%', height:'100%', padding: 8}}
        renderItem={({ item }) => <UserStar username={item.login} imageUri={item.avatar_url} />}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={SeparatorList}
        ListEmptyComponent={EmptyList}
        ListHeaderComponent={() => <Text style={styles.headerListText}>Stargazer</Text>}
        ListFooterComponent={() => (
          users.length ? <Text
            style={styles.endListText}
          >
            End List 🥳
          </Text>: null
        )}
        data-testid="flat-item"
      />
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
  headerListText:{
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
  notFoundText: {
    color: "#FFF",
    fontSize: 24,
    padding: 8
  },
  endListText:{
    fontSize: 30,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
  }
});
export default StargazerList;
