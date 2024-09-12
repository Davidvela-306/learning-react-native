// Here is all the main navigation of our app, 1st hierarchical order
// in this section we add the navigation stacks
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ShopNavigator from "../shop";
import SettingsNavigator from "../settings";

const Stack = createNativeStackNavigator();

function MainNavigator(): JSX.Element {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Shop" component={ShopNavigator} />
      <Stack.Screen name="Settings" component={SettingsNavigator} />
    </Stack.Navigator>
  );
}

export default MainNavigator;
