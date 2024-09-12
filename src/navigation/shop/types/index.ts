import { NativeStackScreenProps } from "@react-navigation/native-stack";

type ShopStackParamList={
    categories: undefined;
    products: undefined;
};

type PropsNavCategories=NativeStackScreenProps<ShopStackParamList, "categories">
type PropsNavProducts=NativeStackScreenProps<ShopStackParamList, "products">;

export { ShopStackParamList, PropsNavProducts, PropsNavCategories }
