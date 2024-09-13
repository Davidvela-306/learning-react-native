import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../../screens/info/home";
import AboutScreen from "../../screens/info/about";
import { InfoStackParamList } from "./types";

const Drawer = createDrawerNavigator<InfoStackParamList>();

function InfoNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="home"
      screenOptions={{
        // fuera de la barra lateral:
        headerStyle: { backgroundColor: "purple" },
        headerTitleStyle: { fontWeight: "bold", fontSize: 20 },
        headerTintColor: "white",
        // en la barra lateral:
        drawerActiveTintColor: "purple",
        drawerActiveBackgroundColor: "pink",
        drawerInactiveTintColor: "pink",
        drawerInactiveBackgroundColor: "white",
        drawerLabelStyle: {
          fontWeight: "bold",
          fontSize: 15,
        },
        drawerType: "back",
        drawerStyle: {
          backgroundColor: "lightblue",
        },
      }}
    >
      <Drawer.Screen name="home" component={HomeScreen} />
      <Drawer.Screen name="about" component={AboutScreen} />
    </Drawer.Navigator>
  );
}

export default InfoNavigator;
