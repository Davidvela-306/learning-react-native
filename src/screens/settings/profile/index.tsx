import { View, Text, Button } from "react-native";
import { styles } from "./styles";
import { PropsNavProfile } from "../../../navigation/settings/types";

function ProfileScreen({ navigation, route }: PropsNavProfile): JSX.Element {
  const { name } = route.params; //se agrega params desde src\screens\settings\index.tsx
  return (
    <View style={styles.container}>
      <Text>Settings</Text>
      <Text>{name}</Text>
      <Button
        title="Go to settings"
        onPress={() => navigation.navigate("settings")}
      />
    </View>
  );
}

export default ProfileScreen;
