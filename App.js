import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ImagePickerSample from "./src/ImagePickerSample";
// class CameraTest extends React.Component {
import ExpoCameraSample from "./src/ExpoCameraSample";
// }

export default function App() {
  return (
    <ImagePickerSample />
    // <ExpoCameraSample />
    // <View style={styles.container}>
    //   // <ImagePickerSample />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
