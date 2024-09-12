import { View, Text, Button } from "react-native";
import { styles } from "./styles";
import { PropsNavCategories } from "../../../navigation/shop/types";

function CategoriesScreen({ navigation }: PropsNavCategories) : JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Categories</Text>
      <Button
        title="Go to Products"
        onPress={() => navigation.navigate("products")}
      />
    </View>
  );
}

export default CategoriesScreen;
