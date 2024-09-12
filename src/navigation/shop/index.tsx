// Here is all the navigation of the store, 2nd hierarchical order
// all store displays are added
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "../../screens/shop/categories";
import ProductsScreen from "../../screens/shop/products";

import { ShopStackParamList } from "./types";

const Stack = createNativeStackNavigator<ShopStackParamList>(); // instance of the stack navigator of the store

function ShopNavigator(): JSX.Element {
  return (
    <Stack.Navigator
      initialRouteName="categories"
      screenOptions={{
        headerStyle: { backgroundColor: "purple" },
        headerTitleStyle: {
          fontWeight: "semibold",
          fontSize: 20,
        },
        headerTitleAlign: "center",
        headerTintColor: "white",
      }}
    >
      <Stack.Screen name="products" component={ProductsScreen} />
      <Stack.Screen name="categories" component={CategoriesScreen} />
    </Stack.Navigator>
  );
}

export default ShopNavigator;
