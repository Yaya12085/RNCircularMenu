import React from "react";
import { Text, Image, TouchableOpacity } from "react-native";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import PropTypes from "prop-types";

const Menu = ({ menuStyles, iconStyles, labelStyles, menu }) => {
  const iconSize = menu.isMain ? 60 : 40;
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const handlePress = () => {
    menu?.onPress?.();
  };

  const gesture = Gesture.Pan()
    .onBegin(() => {
      translateX.value = 0;
      translateY.value = 0;
    })
    .onUpdate((event) => {
      translateX.value = event.translationX;
      translateY.value = event.translationY;
    })
    .onEnd(() => {
      translateX.value = withSpring(0);
      translateY.value = withSpring(0);
    });

  const animatedGestureStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
    ],
  }));

  return (
    <GestureHandlerRootView>
      <GestureDetector gesture={gesture}>
        <Animated.View
          style={[
            animatedGestureStyle,
            {
              justifyContent: "center",
              alignItems: "center",
            },
          ]}
        >
          <TouchableOpacity
            style={[
              {
                position: "absolute",
                width: 100,
                height: 100,
                backgroundColor: "white",
                borderRadius: 50,
                justifyContent: "center",
                alignItems: "center",
                shadowColor: "#000000",
                shadowOffset: {
                  width: 0,
                  height: 6,
                },
                shadowOpacity: 0.1,
                shadowRadius: 6.65,
                elevation: 9,
                padding: 6,
                gap: 4,
              },
              menuStyles,
            ]}
            onPress={handlePress}
          >
            <Image
              source={menu?.icon}
              style={[
                {
                  width: iconSize,
                  height: iconSize,
                },
                iconStyles,
              ]}
              resizeMode="contain"
            />
            <Text
              style={[
                {
                  textAlign: "center",
                  width: "100%",
                  padding: 4,
                  fontSize: menu?.isMain ? 16 : 13,
                  fontWeight: menu?.isMain ? "bold" : "normal",
                  flexWrap: "wrap",
                },
                labelStyles,
              ]}
            >
              {menu?.title}
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
};

Menu.propTypes = {
  menuStyles: PropTypes.object || undefined,
  iconStyles: PropTypes.object || undefined,
  labelStyles: PropTypes.object || undefined,
  menu: PropTypes.shape({
    icon: PropTypes.any,
    title: PropTypes.string,
    isMain: PropTypes.bool || undefined,
    onPress: PropTypes.func,
  }),
};

export default Menu;
