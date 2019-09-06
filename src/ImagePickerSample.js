import React from "react";
import { View, Text, TouchableOpacity, Button, Image } from "react-native";

import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";

export default class ImagePickerSample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: ""
    };
  }

  async componentDidMount() {
    let { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  }
  // launchImageLibraryAsync
  // launchCameraAsync
  snapPicture = async () => {
    pic = await ImagePicker.launchCameraAsync();
    console.log(pic);
    this.setState({ image: pic });
  };
  getPicture = async () => {
    pic = await ImagePicker.launchImageLibraryAsync();
    console.log(pic);
    this.setState({ image: pic });
  };

  render() {
    return (
      <View style={{ flex: 1, marginTop: 200 }}>
        <Button title={"사진 가져오기"} onPress={this.getPicture} />
        <Button title={"사진 찍기"} onPress={this.snapPicture} />
        <Image
          source={{ uri: this.state.image.uri }}
          style={{ width: 100, height: 100 }}
        ></Image>
      </View>
    );
  }
}
