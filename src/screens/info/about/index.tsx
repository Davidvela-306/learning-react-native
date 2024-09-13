import { View, Text, Button } from "react-native";
import { styles } from "./styles";
import { PropsNavAbout } from "../../../navigation/info/types";

function AboutScreen({ navigation }: PropsNavAbout): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>About</Text>
    </View>
  );
}

export default AboutScreen;
