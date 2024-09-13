// Here is all the main navigation of our app, 1st hierarchical order
// in this section we add the navigation stacks, in this case tabs
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShopNavigator from "../shop";
import SettingsNavigator from "../settings";
import Feather from "@expo/vector-icons/Feather";
import InfoNavigator from "../info";
import { RootStackParamList } from "./types";

const Tab = createBottomTabNavigator<RootStackParamList>();

function MainNavigator(): JSX.Element {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Settings"
    >
      <Tab.Screen
        name="Shop"
        component={ShopNavigator}
        options={{
          tabBarLabel: "SHOP",
          tabBarLabelStyle: {
            fontSize: 10,
          },
          tabBarStyle: {
            backgroundColor: "#ffffff",
          },
          tabBarActiveTintColor: "purple",
          tabBarInactiveTintColor: "pink",
          tabBarIcon: ({ focused }) => (
            <Feather
              name="shopping-cart"
              size={24}
              color={focused ? "purple" : "pink"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsNavigator}
        options={{
          tabBarLabel: "SETTINGS",
          tabBarLabelStyle: {
            fontSize: 10,
          },
          tabBarStyle: {
            backgroundColor: "#020202",
          },
          tabBarActiveTintColor: "purple",
          tabBarInactiveTintColor: "pink",
          tabBarIcon: ({ focused }) => (
            <Feather
              name="settings"
              size={24}
              color={focused ? "purple" : "pink"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Info"
        component={InfoNavigator}
        options={{
          tabBarLabel: "SETTINGS",
          tabBarLabelStyle: {
            fontSize: 10,
          },
          tabBarStyle: {
            backgroundColor: "#ffffff",
          },
          tabBarActiveTintColor: "red",
          tabBarInactiveTintColor: "pink",
          tabBarIcon: ({ focused }) => (
            <Feather name="info" size={24} color={focused ? "red" : "pink"} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainNavigator;
