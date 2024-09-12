import { View, Text, Button } from "react-native";
import { styles } from "./styles";
import { PropsNavProfile } from "../../../navigation/settings/types";

function ProfileScreen({ navigation }: PropsNavProfile): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Settings</Text>
      <Button
        title="Go to settings"
        onPress={() => navigation.navigate("settings")}
      />
    </View>
  );
}

export default ProfileScreen;
