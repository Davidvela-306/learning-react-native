import React from "react";
import RootNavigator from "./navigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App(): JSX.Element {
  return (
    <GestureHandlerRootView>
      <RootNavigator />
    </GestureHandlerRootView>
  );
}
