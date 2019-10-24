import React from "react";
import { StyleSheet, View, ImageBackground, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/splash2.jpg")}
        style={{
          width: "100%",
          height: "100%"
        }}
      >
        <Image
          source={require("./assets/logo.png")}
          style={styles.logo}
        ></Image>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent"
  },
  logo: {
    alignSelf: "center",
    position:"relative",
    top:"39%",
    width: 250,
    height: 250
  }
});
