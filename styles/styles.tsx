import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    // maxHeight: 2000,
    // // minWidth: "100%",
    backgroundColor: "#3C6255",
    // // width: "100%",
    // // height: "auto",
    // borderColor: "red",
    // borderWidth: 1,
  },
  header: {
    marginTop: 40,
    width: "100%",
    height: 40,
    backgroundColor: "grey",
  },
  button: {
    backgroundColor: "#EAE7B1f",
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  image: {
    width: 350,
    height: 350,
  },
  scrollView: {
    // marginHorizontal: 10,
    marginTop: 20,
    height: "auto",
    minHeight: "auto",
    // minWidth: 400,
    width: "auto",
    borderBlockColor: "red",
    borderWidth: 1,
  },
  imageScrollView: {
    maxHeight: 350,
    maxWidth: 350,
  },
  text: {
    marginTop: 20,
    width: "80%",
    color: "green",
    backgroundColor: "yellow",
  },
  mountainText: {
    marginTop: 20,
    width: "80%",
    height: "auto",
    color: "green",
    backgroundColor: "red",
  },
  mountainBox: {
    backgroundColor: "#61876E",
  },
  textInput: {
    marginTop: 20,
    borderWidth: 1,
    width: 200,
    borderRadius: 20,
  },
});
