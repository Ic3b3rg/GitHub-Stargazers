import React, { FunctionComponent } from "react";
import { TextInput, StyleSheet } from "react-native";
export interface CustomTextInputProps {
  placeholder: string;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  defaultValue?: string;
}
const CustomTextInput: FunctionComponent<CustomTextInputProps> = ({
  placeholder,
  value,
  defaultValue = "",
  onChange,
}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#BDBDBD"
      value={value}
      onChangeText={onChange}
      maxLength={100}
      defaultValue={defaultValue}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: "90%",
    maxWidth: 400,
    height: 40,
    borderRadius: 20,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 18,
    color: "#161B22",
    backgroundColor: "#F5F5F5",
  },
});

export default CustomTextInput;
