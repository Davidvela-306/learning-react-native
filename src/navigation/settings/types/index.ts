import { NativeStackScreenProps } from "@react-navigation/native-stack";

type SettingsStackParamList={
    settings: undefined;
    profile: { name: string };
    notifications: undefined;
    favorites: undefined;
};

type PropsNavSettings=NativeStackScreenProps<SettingsStackParamList, "settings">
type PropsNavProfile=NativeStackScreenProps<SettingsStackParamList, "profile">;
type PropsNavNotifications=NativeStackScreenProps<SettingsStackParamList, "notifications">;
type PropsNavFavorites=NativeStackScreenProps<SettingsStackParamList, "favorites">;


export { SettingsStackParamList, PropsNavSettings, PropsNavProfile, PropsNavNotifications, PropsNavFavorites }
