import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView,
  TextInput,
  Pressable,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
const robert = require("../expo-template/assets/robert.png");

export default function App() {
  const [show, setShow] = useState<boolean>(false);
  const [changeTextColor, setChangeTextColor] = useState<boolean>(false);
  const [text, setText] = useState<string>("");
  const [textToShow, setTextToShow] = useState<string>("");
  const [textArray, setTextArray] = useState<string[]>([]);

  const mountains = [
    { url: "https://i.imgur.com/LMdxuTD.jpeg" },
    { url: "https://i.imgur.com/M2b0CBW.jpeg" },
    { url: "https://i.imgur.com/ciwrqt6.jpeg" },
    { url: "https://i.imgur.com/nflyrQx.jpeg" },
    { url: "https://i.imgur.com/gXLruxG.jpeg" },
    { url: "https://i.imgur.com/JvHGX20.jpeg" },
    { url: "https://i.imgur.com/aha6o8r.jpeg" },
  ];

  const handleSubmit = () => {
    setTextArray([...textArray, text]);
    setText("");
    // setTextToShow(textArray.joi));
  };

  //   console.log(textArray);
  return (
    <>
      <ScrollView contentContainerStyle={styles.page}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "android" ? "padding" : "height"}
        >
          <Text style={styles.header}>My App</Text>

          {/* <Text>Open up App.tsx to start working on your app!</Text> */}
          <StatusBar style="auto" />
          <TouchableOpacity
            style={styles.button}
            //   title="Click if you dare "
            onPress={() => setShow(!show)}
          >
            <Text>Click if you dare</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.textInput}
            onChangeText={setText}
            value={text}
          ></TextInput>
          <Button title="Submit" onPress={handleSubmit}></Button>
          {show ? <Image source={robert} style={styles.image}></Image> : null}
          <ScrollView style={styles.scrollView}>
            {textArray.map((text, index) => (
              <Pressable onPress={() => setChangeTextColor(!changeTextColor)}>
                <Text
                  key={index}
                  style={changeTextColor ? styles.text : styles.text2}
                >{`${index}. ${text}`}</Text>
              </Pressable>
            ))}
          </ScrollView>
          <ScrollView contentContainerStyle={styles.imageScrollView}>
            {mountains.map((m, index) => (
              <Image
                key={index}
                source={{ uri: m.url }}
                style={styles.image}
              ></Image>
            ))}
          </ScrollView>
        </KeyboardAvoidingView>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  page: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    maxHeight: "100%",
    minWidth: "100%",
    backgroundColor: "black",
    width: "100%",
    height: "100%",
  },
  header: {
    marginTop: 40,
    width: "100%",
    height: 40,
    backgroundColor: "grey",
  },
  button: {
    backgroundColor: "red",
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  image: {
    width: 300,
    height: 300,
  },
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 10,
    marginTop: 20,
    height: "auto",
    maxHeight: 300,
    minWidth: 200,
    width: "auto",
  },
  imageScrollView: {
    // flex: 1,
    // justifyContent: "center",
    // alignContent: "center",
    // backgroundColor: "transparent",
    // marginHorizontal: 10,
    // marginTop: 20,
    // height: "auto",
    maxHeight: 300,
    minWidth: 200,
    // width: "100%",
    // // borderColor: "red",
    // borderWidth: 1,
  },
  text: {
    color: "green",
    backgroundColor: "yellow",
  },
  text2: {
    color: "red",
    backgroundColor: "blue",
  },
  textInput: {
    marginTop: 20,
    borderBlockColor: "red",
    borderWidth: 1,
    width: 200,
    borderRadius: 20,
  },
});
