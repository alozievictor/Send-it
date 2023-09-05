import { Dimensions, ViewProps } from "react-native";
import {
    Text as DefaultText,
    useColorScheme,
    View as DefaultView,
    TouchableOpacity as DefaultTouchableOpacity,
    StyleSheet,
    TouchableOpacity,
    GestureResponderEvent,
    Animated,
  } from "react-native";
  import * as Animatable from "react-native-animatable";
//   import Colors from "../constants/Colors";
  import { useTheme } from "react-native-paper";
  import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
//   import { Shadow, ShadowProps } from "react-native-shadow-2";
  import { JSXElementConstructor, useState } from "react";
  import { useRouter } from "expo-router";
//   import { Main } from "../styles/land";
  import React from "react";



const { width, height } = Dimensions.get('screen');

export const COLORS = {
    primary:"#e7a368",
    title: "#072f4a",
    small: "#737a80",
    active:'#34b985',
    white:"#fafafa"
};

export const SIZES = {
    h1:22,
    h2:20,
    h3:18,
    h4:16,
    h5:14,
    h6:12,
    width,
    height
}

  
  type AnimatedProps = {
    delay?: number;
    animation?:
      | "bounceIn"
      | "bounceInDown"
      | "bounceInUp"
      | "bounceInLeft"
      | "bounceInRight"
      | "fadeIn"
      | "fadeInDown"
      | "fadeInDownBig"
      | "fadeInUp"
      | "fadeInUpBig"
      | "fadeInLeft"
      | "fadeInLeftBig"
      | "fadeInRight"
      | "fadeInRightBig"
      | "flipInX"
      | "flipInY"
      | "lightSpeedIn"
      | "slideInDown"
      | "slideInUp"
      | "slideInLeft"
      | "slideInRight"
      | "zoomIn"
      | "zoomInDown"
      | "zoomInUp"
      | "zoomInLeft"
      | "zoomInRight";
    duration?: number;
    direction?: "normal" | "reverse" | "alternate" | "alternate-reverse";
    easing?:
      | "linear"
      | "ease"
      | "ease-in"
      | "ease-out"
      | "ease-in-out"
      | "ease-in-cubic"
      | "ease-out-cubic"
      | "ease-in-out-cubic"
      | "ease-in-circ"
      | "ease-out-circ"
      | "ease-in-out-circ"
      | "ease-in-expo"
      | "ease-out-expo"
      | "ease-in-out-expo"
      | "ease-in-quad"
      | "ease-out-quad"
      | "ease-in-out-quad"
      | "ease-in-quart"
      | "ease-out-quart"
      | "ease-in-out-quart"
      | "ease-in-quint"
      | "ease-out-quint"
      | "ease-in-out-quint"
      | "ease-in-sine"
      | "ease-out-sine"
      | "ease-in-out-sine"
      | "ease-in-back"
      | "ease-out-back"
      | "ease-in-out-back";
    iterationCount?: number;
    iterationDelay?: number;
    transition?: any;
    onAnimationBegin?: any;
    onAnimationEnd?: any;
    onTransitionBegin?: any;
    onTransitionEnd?: any;
    useNativeDriver?: boolean;
    children?: React.ReactNode;
  };
  type AnimatedViewProps = AnimatedProps & DefaultView["props"];
  export function AnimatedView({
    delay = 0,
    animation,
    duration = 1000,
    direction = "normal",
    easing,
    iterationCount = 1,
    iterationDelay = 0,
    transition,
    onAnimationBegin,
    onAnimationEnd,
    onTransitionBegin,
    onTransitionEnd,
    useNativeDriver = false,
    children,
    style,
  }: AnimatedViewProps) {
    return (
      <Animatable.View
        delay={delay}
        animation={animation}
        duration={duration}
        direction={direction}
        easing={easing}
        iterationDelay={iterationDelay}
        onAnimationEnd={onAnimationEnd}
        onTransitionBegin={onTransitionBegin}
        onTransitionEnd={onTransitionEnd}
        useNativeDriver={useNativeDriver}
        onAnimationBegin={onAnimationBegin}
        transition={transition}
        iterationCount={iterationCount}
        style={[{ backgroundColor: "transparent" }, style]}
      >
        {children}
      </Animatable.View>
    );
  }
  
  type UIButtonProps = {
    color?: string;
    bgColor?: string;
    bgColor2?: string;
    bgColor3?: string;
    isShadows?: boolean;
    isAnimated?: boolean;
    btnType?: "primary" | "secondary" | "danger";
    alighItems?: "center" | "stritch" | "flex-start" | "flex-end" | "baseline";
  } & DefaultTouchableOpacity["props"] &
    AnimatedProps;
  export function UIButton(props: UIButtonProps) {
    const theme = useTheme();
    if (!props.isAnimated && !props.isShadows) {
      return (
        <DefaultTouchableOpacity
          style={[
            {
              alignItems: (props.alighItems as any) ?? "center",
              paddingVertical: 15,
              backgroundColor:
                props.btnType == "primary"
                  ? theme.colors.primary
                  : props.btnType == "danger"
                  ? theme.colors.error
                  : props.btnType == "secondary"
                  ? theme.colors.secondary
                  : theme.colors.primary,
            },
            props.style,
          ]}
        >
          {props.children}
        </DefaultTouchableOpacity>
      );
    }
    if (props.isAnimated && !props.isShadows) {
      return (
        <AnimatedView
          delay={props.delay}
          animation={props.animation}
          duration={props.duration}
        >
          <DefaultTouchableOpacity
            style={[
              {
                alignItems: (props.alighItems as any) ?? "center",
                paddingVertical: 15,
                backgroundColor:
                  props.btnType == "primary"
                    ? theme.colors.primary
                    : props.btnType == "danger"
                    ? theme.colors.error
                    : props.btnType == "secondary"
                    ? theme.colors.secondary
                    : theme.colors.primary,
              },
              props.style,
            ]}
          >
            {props.children}
          </DefaultTouchableOpacity>
        </AnimatedView>
      );
    }
  }
