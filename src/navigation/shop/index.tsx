// Here is all the navigation of the store, 2nd hierarchical order
// all store displays are added
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Feather from "@expo/vector-icons/Feather";
const ubicationIcon = require("../../../assets/ubication.png");

import CategoriesScreen from "../../screens/shop/categories";
import ProductsScreen from "../../screens/shop/products";

import { ShopStackParamList } from "./types";
import { Image, TouchableOpacity } from "react-native";

const Stack = createNativeStackNavigator<ShopStackParamList>(); // instance of the stack navigator of the store

function SettingsIcons({ navigation }: any) {
  return (
    <>
      <TouchableOpacity>
        <Image style={{ width: 27, height: 27 }} source={ubicationIcon} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{ marginRight: 10, marginLeft: 10 }}
        onPress={() => navigation.navigate("Settings")}
      >
        <Feather name="settings" size={24} color="black" />
      </TouchableOpacity>
    </>
  );
}
function ShopNavigator(): JSX.Element {
  return (
    <Stack.Navigator
      initialRouteName="categories"
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: "purple" },
        headerTitleStyle: {
          fontWeight: "semibold",
          fontSize: 20,
        },
        headerTitleAlign: "center",
        headerTintColor: "white",
        headerRight: () => <SettingsIcons navigation={navigation} />,
      })}
    >
      <Stack.Screen name="products" component={ProductsScreen} />
      <Stack.Screen name="categories" component={CategoriesScreen} />
    </Stack.Navigator>
  );
}

export default ShopNavigator;
