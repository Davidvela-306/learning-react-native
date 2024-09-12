import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SettingsStackParamList } from "./types";
import SettingsScreen from "../../screens/settings";
import ProfileScreen from "../../screens/settings/profile";

const Stack = createNativeStackNavigator<SettingsStackParamList>();

function SettingsNavigator(): JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen name="settings" component={SettingsScreen} />
      <Stack.Screen name="profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

export default SettingsNavigator;
