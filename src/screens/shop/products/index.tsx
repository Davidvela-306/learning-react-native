import { View, Text, Button } from "react-native";
import { styles } from "./styles";
import { PropsNavProducts } from "../../../navigation/shop/types";

function ProductsScreen({ navigation }: PropsNavProducts): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Products</Text>
      <Button
        title="Go to Categories"
        onPress={() => navigation.navigate("categories")}
      />
    </View>
  );
}

export default ProductsScreen;
