import { View, Text, Button } from "react-native";
import { styles } from "./styles";
import { PropsNavHome } from "../../../navigation/info/types";

function HomeScreen({ navigation }: PropsNavHome): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
}

export default HomeScreen;
