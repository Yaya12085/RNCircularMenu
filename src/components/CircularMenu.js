import React, { useEffect } from "react";
import { View, Animated } from "react-native";
import PropTypes from "prop-types";
import Menu from "./Menu";
import { calculatePosition } from "../utils";

const CircularMenu = ({
  menuData,
  animationDuration = 300,
  containerStyles,
  menuStyles,
  iconStyle,
  labelStyle,
}) => {
  const filteredItems = menuData.filter((item) => !item.isMain);
  const mainMenu = menuData.find((item) => item.isMain);

  const animationValue = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(animationValue, {
      toValue: 1,
      duration: animationDuration,
      useNativeDriver: true,
    }).start();
  }, [animationValue, animationDuration]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffc059",
        ...containerStyles,
      }}
    >
      <Animated.View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Menu
          menuStyle={{
            width: 125,
            height: 125,
            borderRadius: 125 / 2,
            ...menuStyles,
          }}
          iconStyle={iconStyle}
          labelStyle={labelStyle}
          menu={mainMenu}
        />
        <Animated.View
          style={{
            position: "absolute",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {filteredItems.map((menu, index) => (
            <Menu
              key={index}
              menuStyle={{
                ...calculatePosition(
                  index,
                  filteredItems.length,
                  animationValue
                ),
                ...menuStyles,
              }}
              iconStyle={iconStyle}
              labelStyle={labelStyle}
              menu={menu}
            />
          ))}
        </Animated.View>
      </Animated.View>
    </View>
  );
};

CircularMenu.propTypes = {
  menuData: PropTypes.array.isRequired,
  animationDuration: PropTypes.number,
  containerStyles: PropTypes.object,
  menuStyles: PropTypes.object,
  iconStyle: PropTypes.object,
  labelStyle: PropTypes.object,
};

export default CircularMenu;
