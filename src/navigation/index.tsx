// We create the navigation container, list our navigation tree (MainNavigator)
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./main";

function RootNavigator() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}
export default RootNavigator;
