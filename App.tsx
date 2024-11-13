import { StatusBar } from "expo-status-bar";
import { Children, useState } from "react";
import { Form } from "./components/form";
import { Mountain } from "./types/types";
import { styles } from "./styles/styles";
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

const robert = require("./assets/robert.png");

export default function App() {
  const [show, setShow] = useState<boolean>(false);
  const [changeTextColor, setChangeTextColor] = useState<boolean>(false);
  const [mountain, setMountain] = useState<string>("");
  const [elevation, setElevation] = useState<string>("");
  //   const [textToShow, setTextToShow] = useState<string>("");
  const [mountainArray, setMountainArray] = useState<Mountain[]>([]);

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
    setMountainArray([
      ...mountainArray,
      { mountain: mountain, elevation: elevation },
    ]);
    setMountain("");
    setElevation("");
    // setTextToShow(textArray.joi));
  };

  const formProps = {
    firstPlaceholder: "Mountain name",
    sndPlaceholder: "Elevation",
    firstState: mountain,
    sndState: elevation,
    setFirstState: setMountain,
    setSndState: setElevation,
  };
  //   console.log(textArray);
  return (
    <>
      <ScrollView contentContainerStyle={styles.page}>
        <Text style={styles.header}>My App</Text>
        <StatusBar style="auto" />

        <Form {...formProps} />

        {/* <ScrollView style={styles.scrollView}> */}
        {mountainArray.map((m, index) => (
          <View>
            <Text style={styles.mountainText} key={index}>
              {`${m.mountain} is ${m.elevation} meters high.`}
            </Text>
          </View>
        ))}
        {/* </ScrollView> */}

        <Pressable style={styles.button} onPress={handleSubmit}>
          {" "}
          <Text>Submit</Text>
        </Pressable>

        <ScrollView
          showsVerticalScrollIndicator={true}
          style={styles.imageScrollView}
        >
          {mountains.map((m, index) => (
            <Image
              key={index}
              source={{ uri: m.url }}
              style={styles.image}
            ></Image>
          ))}
        </ScrollView>
        <Pressable onPress={() => setShow(!show)}>
          <Text>Click if you dare</Text>
        </Pressable>
      </ScrollView>
    </>

    // <>
    //   <ScrollView scrollToOverflowEnabled contentContainerStyle={styles.page}>
    //     <KeyboardAvoidingView
    //       style={styles.container}
    //       behavior={Platform.OS === "android" ? "padding" : "height"}
    //     >
    //       <Text style={styles.header}>My App</Text>

    //       <StatusBar style="auto" />
    //       <TouchableOpacity
    //         style={styles.button}
    //         onPress={() => setShow(!show)}
    //       >
    //         <Text>Click if you dare</Text>
    //       </TouchableOpacity>

    //       <TextInput
    //         style={styles.textInput}
    //         onChangeText={setText}
    //         value={text}
    //       ></TextInput>
    //       <Button title="Submit" onPress={handleSubmit}></Button>

    //       {show ? <Image source={robert} style={styles.image}></Image> : null}

    //       <ScrollView style={styles.scrollView}>
    //         {textArray.map((text, index) => (
    //           <Pressable onPress={() => setChangeTextColor(!changeTextColor)}>
    //             <Text
    //               key={index}
    //               style={changeTextColor ? styles.text : styles.text2}
    //             >{`${index}. ${text}`}</Text>
    //           </Pressable>
    //         ))}
    //       </ScrollView>

    //       <ScrollView contentContainerStyle={styles.imageScrollView}>
    //         {mountains.map((m, index) => (
    //           <Image
    //             key={index}
    //             source={{ uri: m.url }}
    //             style={styles.image}
    //           ></Image>
    //         ))}
    //       </ScrollView>

    //     </KeyboardAvoidingView>
    //   </ScrollView>
    // </>
  );
}
