import React, { useEffect, useState } from "react";
import { View,StyleSheet, StatusBar } from "react-native";
import "./src/localization/i18n";
import { initLanguage } from "./src/localization/i18n";
import DashboardScreen from "./src/screen/DashboardScreen";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initLanguage().finally(() => setReady(true));
  }, []);

  if (!ready) return <View />;

  return (
    <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <DashboardScreen />
    </SafeAreaView >
  )

}

const styles=  StyleSheet.create({
container:{
  flex:1,
  // paddingHorizontal:12,
  backgroundColor:"#F0F0F0",

}
})
