import React from "react";
import { View, Animated } from "react-native";
import PropTypes from "prop-types";
import Menu from "./Menu";
import { calculatePosition } from "../utils";

const CircularMenu = ({
  menuData,
  containerStyles,
  menuStyles,
  iconStyles,
  labelStyles,
}) => {
  const filteredItems = menuData.filter((item) => !item.isMain);
  const mainMenu = menuData.find((item) => item.isMain);

  return (
    <View
      style={[
        {
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ffc059",
        },
        containerStyles,
      ]}
    >
      <Animated.View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Menu
          menuStyles={{
            width: 125,
            height: 125,
            borderRadius: 125 / 2,
            ...menuStyles,
          }}
          iconStyles={iconStyles}
          labelStyles={labelStyles}
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
              menuStyles={{
                ...calculatePosition(
                  index,
                  filteredItems.length,
                  animationValue
                ),
                ...menuStyles,
              }}
              iconStyles={iconStyles}
              labelStyles={labelStyles}
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
  iconStyles: PropTypes.object,
  labelStyles: PropTypes.object,
};

export default CircularMenu;
