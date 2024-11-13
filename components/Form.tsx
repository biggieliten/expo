import { View, TextInput } from "react-native";
import { styles } from "../styles/styles";
type FormProps = {
  setFirstState: (value: string) => void;
  setSndState: (value: string) => void;
  firstState: string;
  sndState: string;
  sndPlaceholder: string;
  firstPlaceholder: string;
};

// const props = {
//   firstInput: "",
//   sndInput: "",
//   firstSetState: (value: string) => {},
//   sndSetState: (value: string) => {},
//   firstState: "",
//   sndState: "",
//   style: {},
//   sndPlaceholder: "",
//   firstPlaceholder: "",
// } as FormProps;

export const Form = ({
  firstState,
  setFirstState,
  sndState,
  setSndState,
  firstPlaceholder,
  sndPlaceholder,
}: FormProps) => {
  return (
    <View>
      <TextInput
        placeholder={firstPlaceholder}
        placeholderTextColor={"#fff"}
        style={styles.textInput}
        onChangeText={setFirstState}
        value={firstState}
      />
      <TextInput
        placeholder={sndPlaceholder}
        placeholderTextColor={"#fff"}
        style={styles.textInput}
        onChangeText={setSndState}
        value={sndState}
      />
    </View>
  );
};
