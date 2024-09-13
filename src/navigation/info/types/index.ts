import { NativeStackScreenProps } from "@react-navigation/native-stack";

type InfoStackParamList={
    home: undefined;
    about: undefined;
};

type PropsNavHome=NativeStackScreenProps<InfoStackParamList, "home">
type PropsNavAbout=NativeStackScreenProps<InfoStackParamList, "about">;


export { InfoStackParamList, PropsNavHome, PropsNavAbout }
