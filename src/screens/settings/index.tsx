import { View, Text, Button } from "react-native";
import { styles } from "./styles";
import { PropsNavSettings } from "../../navigation/settings/types";

function SettingsScreen({ navigation }: PropsNavSettings): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Settings</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate("profile", { name: "David" })}
      />
    </View>
  );
}

export default SettingsScreen;
