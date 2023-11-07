import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Input = ({
  label,
  name,
  password,
  error,
  onFocus = () => {},
  ...props
}) => {
  const [isFocus, setIsFocus] = React.useState(false);
  const [hidePassword, setHidePassword] = React.useState(password);

  return (
    <View style={{ marginBottom: 10 }}>
      <Text style={styles.label}>{label}</Text>
      <View
        style={[
          styles.inputCont,
          { borderColor: error ? "red" : isFocus ? "#6c63ff" : "#bbb" },
        ]}
      >
        <TextInput
          secureTextEntry={hidePassword}
          autoCorrect={false}
          keyboardAppearance="default"
          placeholderTextColor="gray"
          autoCapitalize="none"
          autoComplete="off"
          onFocus={() => {
            onFocus();
            setIsFocus(true);
          }}
          onBlur={() => {
            setIsFocus(false);
          }}
          style={{ flex: 1, textDecorationLine: "none" }}
          {...props}
        />
        {password && (
          <Ionicons
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? "eye-off-outline" : "eye-outline"}
            size={22}
            color="gray"
          />
        )}
      </View>
      {error && (
        <Text style={{ color: "red", fontSize: 13, paddingVertical: 2 }}>
          {error}
        </Text>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: {
    fontSize: 15,
    color: "#363636",
    fontWeight: "500",
  },
  inputCont: {
    width: "100%",
    height: 52,
    backgroundColor: "#fafafa",
    elevation: 1,
    borderWidth: 0.8,
    borderColor: "gray",
    marginVertical: 5,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
  },
});
