import React from "react";
import { Controller } from "react-hook-form";
import { TextInput } from "react-native-paper";
import {
  TextInput as DefaultInputText,
  StyleSheet,
  View,
  Text,
} from "react-native";
import Layout from "../../constant/Layout";
import { AnimatedView } from "../../constant/Theme";
type TextBoxProps = {
  control: any;
  required?: boolean;
  name: string;
  errorMesseage?: string;
  secureTextEntry?: boolean;
  label?: string;
  right?: React.ReactNode;
  left?: React.ReactNode;
  mode?: "flat" | "outlined";
  color?: string;
  isError?: boolean;
  pattern?: any;
  disabled?: boolean;
  internal?: boolean;
} & DefaultInputText["props"];
export default function TextBox(props: TextBoxProps) {
  const defaultPattern = /[\s\S]*/;
  return (
    <React.Fragment>
      <AnimatedView animation={"fadeIn"} duration={3000} style={styles.action}>
        <Controller
          name={props.name}
          control={props.control}
          rules={{
            required: props.required,
            pattern: props.pattern ?? defaultPattern,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <React.Fragment>
              {props.internal && (
                <View>
                  <View
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      gap: 5,
                      marginBottom: 10,
                    }}
                  >
                    <Text style={{ fontSize: 12, margin: 0 }}>
                      {`${props.placeholder}`}
                    </Text>
                    {props.required && (
                      <View
                        style={{
                          width: 5,
                          height: 5,
                          backgroundColor: "red",
                          borderRadius: 5,
                        }}
                      ></View>
                    )}
                  </View>
                  <TextInput
                    style={[styles.textInput, props.style]}
                    secureTextEntry={props.secureTextEntry}
                    placeholder={"Enter " + props.placeholder}
                    right={props?.right}
                    left={props?.left}
                    label={props?.label}
                    activeOutlineColor={"transparent"}
                    outlineStyle={{ borderRadius: 8 }}
                    contentStyle={{
                      backgroundColor: "transparent",
                      color: props?.color,
                    }}
                    textColor={props?.color}
                    outlineColor={"b"}
                    onChangeText={onChange}
                    value={value}
                    placeholderTextColor={"grey"}
                    onBlur={onBlur}
                    onEndEditing={props.onEndEditing}
                    keyboardAppearance={props.keyboardAppearance}
                    keyboardType={props.keyboardType}
                    returnKeyType={props.returnKeyType}
                    returnKeyLabel={props.returnKeyLabel}
                    disabled={props.disabled}
                    autoCapitalize={props.autoCapitalize}
                    autoComplete={props.autoComplete}
                    autoCorrect={props.autoCorrect}
                    error={props.isError}
                  />
                </View>
              )}
              {!props.internal && (
                <TextInput
                  style={[styles.textInput, props.style]}
                  secureTextEntry={props.secureTextEntry}
                  placeholder={props.placeholder}
                  right={props?.right}
                  left={props?.left}
                  label={props?.label}
                  activeOutlineColor={"transparent"}
                  outlineStyle={{ borderRadius: 8 }}
                  contentStyle={{
                    backgroundColor: "transparent",
                    color: props?.color,
                  }}
                  textColor={props?.color}
                  outlineColor={"transparent"}
                  onChangeText={onChange}
                  value={value}
                  placeholderTextColor={props?.color}
                  onBlur={onBlur}
                  onChange={props.onChange}
                  onEndEditing={props.onEndEditing}
                  keyboardAppearance={props.keyboardAppearance}
                  keyboardType={props.keyboardType}
                  returnKeyType={props.returnKeyType}
                  returnKeyLabel={props.returnKeyLabel}
                  disabled={props.disabled}
                  autoCapitalize={props.autoCapitalize}
                  autoComplete={props.autoComplete}
                  autoCorrect={props.autoCorrect}
                  error={props.isError}
                />
              )}
            </React.Fragment>
          )}
        />
      </AnimatedView>
      {props.isError && (
        <AnimatedView animation="fadeInLeft" duration={500}>
          <Text style={styles.errorMsg}>{props.errorMesseage}</Text>
        </AnimatedView>
      )}
    </React.Fragment>
  );
}
const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    // paddingLeft: 10,
    color: "#ffffff",
    fontFamily: "OpenSans",
    fontSize: 14,
    width: Layout.window.width - 40,
    paddingVertical: Layout.isSmallDevice ? 5 : 5,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
    width: Layout.window.width - 40,
  },
  errorMsg: {
    color: "red",
    fontSize: 12,
    fontFamily: "OpenSans",
  },
});
